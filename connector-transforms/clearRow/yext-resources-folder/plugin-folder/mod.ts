// deno-lint-ignore-file no-var no-inner-declarations no-redeclare

export function clearRow(row: string) {
  if (row.startsWith("%") == false) {
    var newRow = "";
  } else {
    var newRow = row;
  }
  return newRow;
}
