// @ts-ignore
import {  
    convertTo24Hours,
} from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.114.0/testing/asserts.ts";

Deno.test("Test convertTo24Hours", () => {
    let hours = convertTo24Hours({open: "07:00", close: "17:00"})
    assertEquals(hours.open, "07:00")
    assertEquals(hours.close, "17:00")
    hours = convertTo24Hours({open: "04:00", close: "04:00"})
    assertEquals(hours.open, "00:00")
    assertEquals(hours.close, "00:00")
});