type ConnectorSource = (nextPageToken: string) => Promise<string>
type ConnectorOptions = {
  callbackFunc: (response: any) => void;
}

export async function testConnector(connectorFunction: ConnectorSource, options?: ConnectorOptions) {
  const data = [];
  let response;
  let nextPageToken = "";

  do {
    const responseJSON = await connectorFunction(JSON.stringify({pageToken: nextPageToken}));
    response = JSON.parse(responseJSON);
    nextPageToken = response.nextPageToken;
    data.push(...response.data);
    options?.callbackFunc(response);
  } while (nextPageToken);

  return {
    updatesCount: data.length,
    data: data
  };
}
