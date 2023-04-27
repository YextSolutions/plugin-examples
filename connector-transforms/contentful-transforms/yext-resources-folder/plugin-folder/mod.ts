import { documentToHtmlString } from "https://cdn.skypack.dev/@contentful/rich-text-html-renderer";
import { documentToPlainTextString } from "https://cdn.skypack.dev/@contentful/rich-text-plain-text-renderer";

export const richTextToHTML = (input: any) => {
  return documentToHtmlString(JSON.parse(input));
};

export const richTextToPlainText = (input: any) => {
  return documentToPlainTextString(JSON.parse(input));
};
