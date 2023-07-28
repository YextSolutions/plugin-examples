type ConnectorSource = (nextPageToken: string) => Promise<string>

export async function testConnector(connectorFunction: ConnectorSource) {
  const data = [];
  let response;
  let nextPageToken = "";

  do {
    const responseJSON = await connectorFunction(JSON.stringify({pageToken: response.nextPageToken}));
    response = JSON.parse(responseJSON);
    nextPageToken = response.nextPageToken;
    data.push(...response.data);
    console.info("\nresponse size:", response.data.length)
    console.info("response next page token:", response.nextPageToken)
  } while (nextPageToken);

  console.info("end")
  console.info("total updates returned: ", data.length)
  console.info(data);
}
