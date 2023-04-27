import { State, any } from "./types.ts";
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
const categoryEndpoint = `https://${FRESHDESK_SUBDOMAIN}.freshdesk.com/api/v2/solutions/categories`;
let linkHeader: any = undefined;

/*
 * Fetches a page of articles and their folders from the Freshdesk instance specified by FRESHDESK_SUBDOMAIN.
 * If the Freshdesk rate limit has been reached, the function sleeps for a period of time and persists
 * the current state of the syncing process to the next function call.
 */
export const fetchArticles = async (inputString: string) => {
    const finalArticlesArray: any[] = [];
    const inputJson = JSON.parse(inputString);
    const pageToken = inputJson.pageToken;
    let state: State;
    let categoriesListEndpoint = categoryEndpoint;
    // check if any state has persisted from a previous function call.
    if(pageToken){
        state = JSON.parse(pageToken);
        const sleepResult = sleepUntilRetryOrContinue(state);
        if (sleepResult) {
            return sleepResult;
        }
        categoriesListEndpoint = state.ticketUrl ? state.ticketUrl : categoriesListEndpoint;
    }
    // fetch a single page of articles.
    const categoriesPage = await fetch(categoriesListEndpoint, requestOptions).then(response => parseApiResponse(response));
    // check if we hit the rate limit. If so, we must persist the retryAfter the value and completely restart syncing this page.
    if (categoriesPage.retryAfter) {
        const retryState = {retryAfter: categoriesPage.retryAfter, ticketUrl: categoriesListEndpoint, ticketIndex: 0};
        return JSON.stringify({data: {articles: [{id:""}]}, nextPageToken: JSON.stringify(retryState)});
    } else {
        // for each category, we fetch the first page of its folders
        for (let i = 0; i < categoriesPage.length; i++) {
            const category = categoriesPage[i];
            const folders: any = await fetchfolders(category.id);
            if (folders.retryAfter) {
                // if we hit the rate limit, we return the finalized articles we have collected so far. In the next function call,
                // we will start fetching folders from the current category.
                const retryState = {retryAfter: folders.retryAfter, ticketUrl: categoriesListEndpoint, ticketIndex: i};
                return JSON.stringify({data: {articles: articles}, nextPageToken: JSON.stringify(retryState)});
            }

            for (let i = 0; i < folders.folders.length; i++) {
                const folder = folders.folders[i];
                const articlesList: any = await fetcharticles(folder.id);
                if (articlesList.retryAfter) {
                    // if we hit the rate limit, we return the finalized articles we have collected so far. In the next function call,
                    // we will start fetching folders from the current category.
                    const retryState = {retryAfter: folders.retryAfter, ticketUrl: categoriesListEndpoint, ticketIndex: i};
                    return JSON.stringify({data: {articles: articles}, nextPageToken: JSON.stringify(retryState)});
                }
            
                for (let i = 0; i < articlesList.articles.length; i++) {
                    const article = articlesList.articles[i];
                    const finalArticle = {...article, folder: {...folder}, category: {...category}}
                    finalArticlesArray.push(finalArticle);
                }
            }
        }
    }
    const response: any = { data: { articles: finalArticlesArray } };
    return JSON.stringify(response);
}



//         // we check for a "Link" header in the category call which is present only when there is another page to hit, in which case we grab that url to paginate
//         let nextTicketPageUrl = undefined;
//         if (linkHeader) {
//             let endIndex = linkHeader.indexOf(">");
//             let linkUrl = linkHeader.substring(1, endIndex);
//             nextTicketPageUrl = linkUrl;
//         }
//         const response: any = { data: { articles: articles } };

//         if(nextTicketPageUrl){
//             const state = {ticketUrl: nextTicketPageUrl, ticketIndex: 0};
//             response['nextPageToken'] = JSON.stringify(state);
//         }
//         return JSON.stringify(response);
//     }    
// }

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
        return JSON.stringify({data: {articles: [{id:""}]}, nextPageToken:JSON.stringify(state)});
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
 * Fetches a single page of folders for the specified @param {tickedId}.
 * If we hit the rate limit for the folders endpoint, we return the number of seconds we must wait before retrying instead.
 */
const fetchfolders = async (categoryId: any) => {
    const commentListEndpoint = `https://${FRESHDESK_SUBDOMAIN}.freshdesk.com/api/v2/solutions/categories/${categoryId}/folders`;
    const firstPage = await fetch(commentListEndpoint, requestOptions).then(response => parseApiResponse(response));
    if (firstPage.retryAfter) {
        return firstPage;
    }
    return { folders: firstPage };
}

const fetcharticles = async (folderId: any) => {
    const commentListEndpoint = `https://${FRESHDESK_SUBDOMAIN}.freshdesk.com/api/v2/solutions/folders/${folderId}/articles`;
    const firstPage = await fetch(commentListEndpoint, requestOptions).then(response => parseApiResponse(response));
    if (firstPage.retryAfter) {
        return firstPage;
    }
    return { articles: firstPage };
}