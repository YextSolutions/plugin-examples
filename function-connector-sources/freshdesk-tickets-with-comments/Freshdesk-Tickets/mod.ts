import { State, CommentResponse } from "./types.ts";
import { sleep } from "./utilities.ts";

//retrieving variables set in resource file
declare const api_key: string;
declare const FRESHDESK_SUBDOMAIN: string;

//converting basic auth to bit64 to pass in header
const basicAuthEnconded = btoa(`${api_key}:`);
const myHeaders = new Headers();
myHeaders.append("Authorization", `Basic ${basicAuthEnconded}`);
const requestOptions = {
  method: 'GET',
  headers: myHeaders,
};
const baseTicketEndpoint = `https://${FRESHDESK_SUBDOMAIN}.freshdesk.com/api/v2/tickets?include=company,stats,description,requester&per_page=1`;
let linkHeader: any = undefined;

/*
 * Fetches a page of tickets and their comments from the Freshdesk instance specified by FRESHDESK_SUBDOMAIN.
 * If the Freshdesk rate limit has been reached, the function sleeps for a period of time and persists
 * the current state of the syncing process to the next function call.
 */
export const fetchTickets = async (inputString: string) => {
    const inputJson = JSON.parse(inputString);
    const pageToken = inputJson.pageToken;
    let state: State;
    let ticketsListEndpoint = baseTicketEndpoint;
    // check if any state has persisted from a previous function call.
    if(pageToken){
        state = JSON.parse(pageToken);
        const sleepResult = sleepUntilRetryOrContinue(state);
        if (sleepResult) {
            return sleepResult;
        }
        ticketsListEndpoint = state.ticketUrl ? state.ticketUrl : ticketsListEndpoint;
    }
    // fetch a single page of tickets.
    const ticketsPage = await fetch(ticketsListEndpoint, requestOptions).then(response => parseApiResponse(response));
    // check if we hit the rate limit. If so, we must persist the retryAfter the value and completely restart syncing this page.
    if (ticketsPage.retryAfter) {
        const retryState = {retryAfter: ticketsPage.retryAfter, ticketUrl: ticketsListEndpoint, ticketIndex: 0};
        return JSON.stringify({data: {tickets: [{id:""}]}, nextPageToken: JSON.stringify(retryState)});
    } else {
        const ticketArray = ticketsPage;
        const tickets: any[] = [];
        // for each ticket, we fetch the first page of its comments
        for (let i = 0; i < ticketArray.length; i++) {
            const ticket = ticketArray[i];
            const comments: CommentResponse = await fetchComments(ticket.id);
            if (comments.retryAfter) {
                // if we hit the rate limit, we return the finalized tickets we have collected so far. In the next function call,
                // we will start fetching comments from the current ticket.
                const retryState = {retryAfter: comments.retryAfter, ticketUrl: ticketsListEndpoint, ticketIndex: i};
                return JSON.stringify({data: {tickets: tickets}, nextPageToken: JSON.stringify(retryState)});
            }
            // after fetching the comments, we add them as another field on the ticket object.
            const finalTicket = { ...ticket, comments: comments.comments };
            tickets.push(finalTicket);
        }
        // we check for a "Link" header in the ticket call which is present only when there is another page to hit, in which case we grab that url to paginate
        let nextTicketPageUrl = undefined;
        if (linkHeader) {
            let endIndex = linkHeader.indexOf(">");
            let linkUrl = linkHeader.substring(1, endIndex);
            nextTicketPageUrl = linkUrl;
        }
        const response: any = { data: { tickets: tickets } };

        if(nextTicketPageUrl){
            const state = {ticketUrl: nextTicketPageUrl, ticketIndex: 0};
            response['nextPageToken'] = JSON.stringify(state);
        }
        return JSON.stringify(response);
    }    
}

/*
 * If @param {state} has a retry value set, the function sleeps at most 5 seconds.
 * The state is updated to reflect the new number of seconds that must pass before we attempt to issue an API request.
 * If no retry value is set, we return undefined.
 */
function sleepUntilRetryOrContinue(state: State) {
    if (state.retryAfter) {
        const secondsToSleep = state.retryAfter > 5 ? 5 : state.retryAfter;
        sleep(secondsToSleep);
        state.retryAfter = state.retryAfter - secondsToSleep;
        return JSON.stringify({data: {tickets: [{id:""}]}, nextPageToken:JSON.stringify(state)});
    }
    return undefined;
}

/*
 * Parses the API response's headers for the Retry-After value.
 * If it is present, we return the number of seconds that must pass before we can issue another API request.
 * If it is not present, we return undefined.
 */
function fetchRetryAfterSeconds(response: Response) {
    if (response.headers && response.headers.has("Retry-After")) {
        const retryAfterSeconds = response.headers.get("Retry-After");
        if (retryAfterSeconds) {
            return parseInt(retryAfterSeconds);
        }
    }
    return undefined;
}

/*
 * Parses the Api Response based on API response status code:
 * 200 OK: we return the response body as a JSON object.
 * 429 Too Many Requests: we return the Retry-After header value
 * Otherwise, we return the response as text.
 */
function parseApiResponse(response: Response) {
    if (response.status === 200) {
        if (response.headers.has("Link")) {
            linkHeader = response.headers.get("Link");
        }
        return response.json();
    } else if (response.status === 429) {
        return {retryAfter: fetchRetryAfterSeconds(response)};
    } else {
        return response.text();
    }
}

/*
 * Fetches a single page of comments for the specified @param {tickedId}.
 * If we hit the rate limit for the comments endpoint, we return the number of seconds we must wait before retrying instead.
 */
const fetchComments = async (ticketId: any) => {
    const commentListEndpoint = `https://${FRESHDESK_SUBDOMAIN}.freshdesk.com/api/v2/tickets/${ticketId}/conversations?per_page=100`;
    const firstPage = await fetch(commentListEndpoint, requestOptions).then(response => parseApiResponse(response));
    if (firstPage.retryAfter) {
        return firstPage;
    }
    return { comments: firstPage };
}