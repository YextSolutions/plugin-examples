import { clearRow } from "./mod.ts";

Deno.test("Testing export function", () => {
  const row = "%jfkdlsa";
  clearRow(row);
});
