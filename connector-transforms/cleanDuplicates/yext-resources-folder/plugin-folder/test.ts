import { cleanDuplicates } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.114.0/testing/asserts.ts";

Deno.test("Testing clean duplicates", () => {
  const list = ["one", "two", "three", "one", "two"];
  let cleanedList = cleanDuplicates(list);
  assertEquals(["one", "two", "three"], cleanedList);
});
