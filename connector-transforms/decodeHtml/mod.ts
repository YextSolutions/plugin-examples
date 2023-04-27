// deno-lint-ignore-file no-var

import { decode } from "https://cdn.skypack.dev/html-entities";

export function decodeHtml(html: string) {
  return (html = decode(html));
}