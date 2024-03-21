// @ts-ignore
import {
    titleCasePreserveCapitalization,
} from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.114.0/testing/asserts.ts";

Deno.test("Test titleCasePreserveCapitalization", () => {
    let tests = [
        {Input: "title case", Output: "Title Case"},
        {Input: "TITLE case", Output: "TITLE Case"},
        {Input: "TITLE case-Test", Output: "TITLE Case-Test"},
        {Input: "Title case-Test-test", Output: "Title Case-Test-Test"},
        {Input: "-title case-Test-test", Output: "-Title Case-Test-Test"},
        {Input: "TITLE-CASE", Output: "TITLE-CASE"},
    ]
    let result = "";
    for (let i in tests) {
        result = titleCasePreserveCapitalization(tests[i].Input);
        assertEquals(result, tests[i].Output);
    }
});
