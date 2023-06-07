// @ts-ignore
import {  
    cleanEnglishName,
} from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.114.0/testing/asserts.ts";

Deno.test("Test cleanEnglishName", () => {
    let nameTests = [
        {Input: "Company Name llc", Output: "Company Name LLC"},
        {Input: "Bob Smith llm", Output: "Bob Smith LLM"},
        {Input: "Tom Levine od", Output: "Tom Levine OD"},
        {Input: "Mary Kim Dds", Output: "Mary Kim DDS"},
        {Input: "Mcsmith", Output: "McSmith"},
        {Input: "Mccormick", Output: "McCormick"},
        {Input: "Mcbride", Output: "McBride"},
        {Input: "Mckinley", Output: "McKinley"},
        {Input: "Mcgavin", Output: "McGavin"},
        {Input: "Mcarthur", Output: "McArthur"},
        {Input: "Mclean", Output: "McLean"},
        {Input: "Mcflood", Output: "McFlood"},
        {Input: "Mcvincent", Output: "McVincent"},
        {Input: "Mchenry", Output: "McHenry"},
        {Input: "Mcneil", Output: "McNeil"},
        {Input: "Mcdonald", Output: "McDonald"},
        {Input: "Mcpherson", Output: "McPherson"},
        {Input: "Maccorkle", Output: "MacCorkle"},
        {Input: "Martin iii", Output: "Martin III"},
        {Input: "Carter iv", Output: "Carter IV"},
        {Input: "Amick'S Ferry", Output: "Amick's Ferry"},
        {Input: "O'Shaw", Output: "O'Shaw"},
        {Input: "Slomchinksi", Output: "Slomchinksi"},
        {Input: "Armchair", Output: "Armchair"},
        {Input: "Tomcats", Output: "Tomcats"},
        {Input: "The Tomcats", Output: "The Tomcats"},
        {Input: "Tomca", Output: "Tomca"},
    ]
    let name = ""
    for (let i in nameTests) {
        name = cleanEnglishName(nameTests[i].Input)
        assertEquals(name, nameTests[i].Output)
    }
});