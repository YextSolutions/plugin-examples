export async function fetchGraphQLAPI (graphQLUrl: string) {
  const graphQLResponse = await fetch(graphQLUrl).then(response => response.json());

  const response = { data: graphQLResponse.data };

  return JSON.stringify(response);
}
