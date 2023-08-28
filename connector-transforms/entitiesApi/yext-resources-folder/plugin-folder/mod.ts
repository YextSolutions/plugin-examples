// deno-lint-ignore-file no-var no-inner-declarations no-redeclare

export  async function getEntityData (row: {entityId: string, field: string, apiKey: string}): Promise<{fieldValue: string}>
{
  console.error()
  const entityId = row.entityId
  const field = row.field
  const apiKey = row.apiKey

  const res = await fetch (
    `https://api.yext.com/v2/accounts/me/entities/${entityId}?api_key=${apiKey}&v=20230606`,
    {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    }
  );
  const resJson = (await res.json())

  const response = resJson.response[field].toString()

  return {fieldValue: response}

};