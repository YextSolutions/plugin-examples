import { fetchTickets } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.114.0/testing/asserts.ts";

declare global {
    var ZENDESK_SUBDOMAIN: string;
    var password: string;
    var username: string;
}

Deno.test("Test My Function", async () => {
    let nextPageToken = JSON.stringify({pageToken: undefined});
    let fullData: unknown[] = [];
    let pageNumber = 1;
    do {
      const res: string = await fetchTickets(nextPageToken);
      const resObj = JSON.parse(res);
      const data = resObj.data;
      nextPageToken = resObj.nextPageToken;
      console.log("high level token = " + nextPageToken);
      if (nextPageToken) {
        nextPageToken = JSON.stringify({pageToken: nextPageToken});
      }
      console.log(`Found ${data.tickets.length} rows on page ${pageNumber}`);
  
      if (data.tickets.length>0) {
        fullData = [...fullData, ...data.tickets];
      }
  
      pageNumber += 1;
    } while (nextPageToken);
    console.log(`Fetched ${fullData.length} total rows`);
    assertEquals(fullData.length, 78);
}); 