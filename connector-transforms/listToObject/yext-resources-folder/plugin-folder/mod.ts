// deno-lint-ignore-file no-var

export function listToObject(values: string) {
  var array = values.split(",");

  var half_length = Math.ceil(array.length / 2);
  var attributes = array.slice(0, half_length);
  var booleans = array.slice(half_length, array.length);

  var result = {} as any;
  attributes.forEach((k, i) => {
    result[k] = booleans[i];
  });
  console.log(JSON.stringify(result));
  return JSON.stringify(result);
}
