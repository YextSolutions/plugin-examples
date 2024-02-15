import { validateUrl } from "./mod.ts";
Deno.test("Testing export function", async () => {
    const url = 'https://developer.conga.com/manage-fulfill/reference/put_billingpreference-id-toggleactivestatus-activeflag'
    const output = await validateUrl(url);
  console.log('This is the output:', output)
});