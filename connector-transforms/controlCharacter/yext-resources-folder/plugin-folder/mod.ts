// deno-lint-ignore-file no-var

export function controlCharacters(str: string) {
  return str.replace(/[^\x20-\x7E]/g, "");
}
