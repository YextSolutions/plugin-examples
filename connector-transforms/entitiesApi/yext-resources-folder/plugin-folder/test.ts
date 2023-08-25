import { getEntityData } from "./mod.ts";

Deno.test("Testing export function", async () => {
  const row = {entityId: 'test', field: "test", apiKey: ""};
  const output = await getEntityData(row);
  console.log(output)
});