// deno-lint-ignore-file no-var no-inner-declarations no-redeclare

export  async function getLength (row: {name: string}): Promise<{nameLength: string}>

{
  const content = row.name
  const length = content.length.toString()
  console.log(length)
  
  return {nameLength: length};
}
