// deno-lint-ignore-file no-var no-inner-declarations no-redeclare

export function parseBool(input: string) {
  //add more entries to the map when needed
  let boolMap: {[trueString: string]: boolean} = {
    "1": true,
    "Y": true,
    "y": true
  };
  return boolMap[input] || false;
}
