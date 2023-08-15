// deno-lint-ignore-file no-var no-inner-declarations no-redeclare

export function cleanDuplicates(list: string[]) {
  let uniqueStrings : {[uniqueString: string]: boolean} = {};
  let cleanedList: string[] = [];
  list.forEach((listEntry) => {
    if (!uniqueStrings[listEntry]) {
      uniqueStrings[listEntry] = true;
      cleanedList.push(listEntry);
    }
  });
  return cleanedList;
}
