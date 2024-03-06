import { getLength } from "./mod.ts";

Deno.test("Testing export function", () => {
  const cell = "%jfkdlsa";
  getLength(cell);
});
