import { parseBool } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.114.0/testing/asserts.ts";

Deno.test("Testing parse bool", () => {
  assertEquals(true, parseBool("1"));
  assertEquals(true, parseBool("y"));
  assertEquals(true, parseBool("Y"));
  assertEquals(false, parseBool("0"));
  assertEquals(false, parseBool("N"));
});
