declare const username: string;
declare const password: string;
declare const subdomain: string;
declare const startTime: string;

// subdomain = "Tags"
// username = "bmoum@yext.com/token"
// password = "9YyJDdLQgSjEFSeCJYE06gKYWFGkaWOO5Dutldqj"
// let cursor = "";


// Encode the username and password as Base64 and pass in header
  const auth = btoa(`${username}:${password}`);
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Basic ${auth}`);
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

 export const getTickets = async function getTickets() { 
  let url: string;
  let cursor: jsonResponse.response.meta.after_cursor;

  // If there's no cursor provided, use the start time to make the initial API call
  if (cursor == "") {
    url = `https://tags.zendesk.com/api/v2/incremental/tickets/cursor.json?start_time=1679775117`;
  } else {
    // If there is a cursor provided, use it to make the subsequent API call
    url = `https://tags.zendesk.com/api/v2/incremental/tickets/cursor.json?cursor=${cursor}`;
  }

  // Make the API call
  const Response = await fetch(url, requestOptions).then(response => response.json());

  const result = Response.tickets.map(({ plain_body }) => plain_body)
  var testVariable = JSON.stringify(result)
  
  return JSON.stringify(result);

}
//will need to add pagination  
//create DEV ACCOUNT, UPLOAD VIA CLI, when uploading use yext credentials, dont use unix start time from last month - run and see if it does from start time, 
//then run again, see if it does from cursor. 
//subdomain = tags 
