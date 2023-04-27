import { sleep as denoSleep } from "https://deno.land/x/sleep/mod.ts";

export async function sleep(seconds: number) {
  await denoSleep(seconds);
  return;
}