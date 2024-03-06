// deno-lint-ignore-file no-var no-inner-declarations no-redeclare

export  async function getEntityMatches (row: {field: string}): Promise<{entities: string}>
{
  console.error()
  const field = row.field
  const fieldApiName = //INSERT API NAME OF FIELD TO SEARCH ON
  const api_key = //INSERT API KEY

  const res = await fetch (
    `https://api.yext.com/v2/accounts/me/entities?api_key=${api_key}&v=20240606&filter=%7B%22${fieldApiName}%22%3A%7B%22%24eq%22%3A%22${field}%22%7D%7D`,
    {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    }
  );
  const resJson = (await res.json())
  //console.log('this is resjson', resJson)
  const response = resJson.response
  let entitesList = []
  for (const item of response.entities) {
    entitesList.push(item.meta.id)
  }

 // console.log(response)
  const entities = entitesList.toString()
  console.log('entiites', entities)
  return {entities: entities}

};