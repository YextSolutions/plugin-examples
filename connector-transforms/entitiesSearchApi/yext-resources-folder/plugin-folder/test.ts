import { getEntityMatches } from "./mod.ts";

Deno.test("Testing export function", async () => {
  const row = {address.line1: '123'};
  const output = await getEntityMatches(row);
  console.log(output)
});