// @ts-ignore
import {
    splitAndCleanUSAddress,
    cleanUSAddress,
} from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.114.0/testing/asserts.ts";

Deno.test("Test splitAndCleanUSAddress", () => {
    let addressSplitTests = [
        {Input: "51 1st Street Suite 405", Address1: "51 1st Street", Address2: "Suite 405"},
        {Input: "12 Westpark Ave Space 400", Address1: "12 Westpark Ave", Address2: "Space 400"},
        {Input: "900 Elder St Floor 30", Address1: "900 Elder St", Address2: "Floor 30"},
        {Input: "2804 Main St # 105", Address1: "2804 Main St", Address2: "# 105"},
        {Input: "2804 Main St #105", Address1: "2804 Main St", Address2: "#105"},
        {Input: "13010 Morris Rd Bldg 1 #200", Address1: "13010 Morris Rd", Address2: "Bldg 1 #200"},
        {Input: "2181 Hwy 2 E #6B", Address1: "2181 Hwy 2 E", Address2: "#6B"},
        {Input: "51 W Second Street Ste 2", Address1: "51 W Second Street", Address2: "Ste 2"},
        {Input: "1 Tyco Rd Unit 3", Address1: "1 Tyco Rd", Address2: "Unit 3"},
        {Input: "1 Tyco Rd, Suite 3", Address1: "1 Tyco Rd", Address2: "Suite 3"},
        {Input: "7900 Tysons Blvd Spc 2", Address1: "7900 Tysons Blvd", Address2: "Spc 2"},
        {Input: "89 Macbeth St Bldg 3", Address1: "89 Macbeth St", Address2: "Bldg 3"},
        {Input: "945 Nealy Rd Fl 2", Address1: "945 Nealy Rd", Address2: "Fl 2"},
        {Input: "200 W Broad St Unit 2", Address1: "200 W Broad St", Address2: "Unit 2"},
        {Input: "1313 Sunrise Lane", Address1: "1313 Sunrise Lane", Address2: ""},
        {Input: "14 United St", Address1: "14 United St", Address2: ""},
        {Input: "2804 Main St ste 105", Address1: "2804 Main St", Address2: "Ste 105"},
        {Input: "2804 Main St STE 105", Address1: "2804 Main St", Address2: "Ste 105"},
        {Input: "1620 N Carpenter Rd Bldg D Ste 57B", Address1: "1620 N Carpenter Rd", Address2: "Bldg D Ste 57B"},
        {Input: "1001 S Capital Of Texas Hwy Bldg L Ste 250", Address1: "1001 S Capital Of Texas Hwy", Address2: "Bldg L Ste 250"},
        {Input: "1001 S Capital Of Texas Hwy L250", Address1: "1001 S Capital Of Texas Hwy L250", Address2: ""},
        {Input: "1001 S Capital OF Texas Hwy Ste L250", Address1: "1001 S Capital Of Texas Hwy", Address2: "Ste L250"},
        {Input: "801 S Anaheim Blvd Unit 108 Fl 1", Address1: "801 S Anaheim Blvd", Address2: "Unit 108 Fl 1"},
        {Input: "14870 Space Center Blvd Ste B", Address1: "14870 Space Center Blvd", Address2: "Ste B"},
        {Input: "8627 N Mopac Expy Ste 220", Address1: "8627 N Mopac Expy", Address2: "Ste 220"},
        {Input: "9555 W Sam Houston Pkwy S Ste 315", Address1: "9555 W Sam Houston Pkwy S", Address2: "Ste 315"},
        {Input: "18445 Highway 105 W Unit 105", Address1: "18445 Highway 105 W", Address2: "Unit 105"},
        {Input: "1606 E Bus. Hwy 77 Ste A", Address1: "1606 E Bus. Hwy 77", Address2: "Ste A"},
        {Input: "7838 Highway 90A", Address1: "7838 Highway 90A", Address2: ""},
        {Input: "1001 University Dr E Ste 105", Address1: "1001 University Dr E", Address2: "Ste 105"},
        {Input: "2838 N Loop 1604 E Ste 108", Address1: "2838 N Loop 1604 E", Address2: "Ste 108"},
        {Input: "904 North Broadway", Address1: "904 North Broadway", Address2: ""},
        {Input: "102 Edwards", Address1: "102 Edwards", Address2: ""},
        {Input: "40 S. Main St.", Address1: "40 S. Main St.", Address2: ""},
        {Input: "1501 N Highway 67", Address1: "1501 N Highway 67", Address2: ""},
        {Input: "1514 Avenue D", Address1: "1514 Avenue D", Address2: ""},
        {Input: "9020 Soncy", Address1: "9020 Soncy", Address2: ""},
        {Input: "3595 Rr 620 S Ste W100", Address1: "3595 Rr 620 S", Address2: "Ste W100"},
        {Input: "805 E FM 1187 Ste B", Address1: "805 E FM 1187", Address2: "Ste B"},
        {Input: "225 Exchange St Ste I", Address1: "225 Exchange St", Address2: "Ste I"},
        {Input: "225 E Broadway Ste 214", Address1: "225 E Broadway", Address2: "Ste 214"},
        {Input: "8113 S I 35 Service Rd", Address1: "8113 S I 35 Service Rd", Address2: ""},
        {Input: "310 E I 30 Ste M104", Address1: "310 E I 30", Address2: "Ste M104"},
        {Input: "6009 W I 20", Address1: "6009 W I 20", Address2: ""},
        {Input: "4625 S 2300 E Ste 104", Address1: "4625 S 2300 E", Address2: "Ste 104"},
        {Input: "966 Ste. Catherine Ouest", Address1: "966 Ste. Catherine Ouest", Address2: ""},
        {Input: "1443 Metropolitan Avenue - Ste C2", Address1: "1443 Metropolitan Avenue", Address2: "Ste C2"},
        {Input: "1234 Tim-tam     street", Address1: "1234 Tim-Tam Street", Address2: ""},
    ]

    for (let i in addressSplitTests) {
      let addressObject = {
        input: addressSplitTests[i].Input
      };
      let addressResult = splitAndCleanUSAddress(addressObject);
      assertEquals(addressResult.address1, addressSplitTests[i].Address1)
      assertEquals(addressResult.address2, addressSplitTests[i].Address2)
    }
});

Deno.test("Test cleanUSAddress", () => {
    let address1Tests = [
        {Input: "1St St N W ", Output: "1st St NW"},
        {Input: "1St St s", Output: "1st St S"},
        {Input: "23RD St sw", Output: "23rd St SW"},
        {Input: "13tH St ne,", Output: "13th St NE"},
        {Input: "500 27TH St", Output: "500 27th St"},
        {Input: "5 W 30TH St", Output: "5 W 30th St"},
        {Input: "16TH Congo", Output: "16th Congo"},
        {Input: " Near", Output: "Near"},
        {Input: "Main St n", Output: "Main St N"},
        {Input: "10 s w garber", Output: "10 SW Garber"},
        {Input: "133TH St", Output: "133th St"},
        {Input: "12 Madison Ave", Output: "12 Madison Ave"},
        {Input: "14 Madison av", Output: "14 Madison Ave"},
        {Input: "13 Arlington Bl", Output: "13 Arlington Blvd"},
        {Input: "13 Arlington Blv,", Output: "13 Arlington Blvd"},
        {Input: "144 Mcarthur Rd", Output: "144 McArthur Rd"},
        {Input: "1313 Sunrise Lane", Output: "1313 Sunrise Lane"},
        {Input: "14 United St", Output: "14 United St"},
        {Input: "Annandale Twp", Output: "Annandale Township"},
        {Input: "Mountain Hts", Output: "Mountain Heights"},
        {Input: "6800 Montivideo Sq", Output: "6800 Montivideo Square"},
        {Input: "Mcsmith", Output: "McSmith"},
        {Input: "Mccormick", Output: "McCormick"},
        {Input: "Mckinley", Output: "McKinley"},
        {Input: "Mcgavin", Output: "McGavin"},
        {Input: "Mcarthur", Output: "McArthur"},
        {Input: "Mclean", Output: "McLean"},
        {Input: "Mcflood", Output: "McFlood"},
        {Input: "Mcvincent", Output: "McVincent"},
        {Input: "Mchenry", Output: "McHenry"},
        {Input: "Mcneil", Output: "McNeil"},
        {Input: "Mcdonald", Output: "McDonald"},
        {Input: "Enumclaw", Output: "Enumclaw"},
        {Input: "Tucumcari", Output: "Tucumcari"},
        {Input: "13 Ivy Rd", Output: "13 Ivy Rd"},
        {Input: "Co Spgs", Output: "Colorado Springs"},
        {Input: "co spgs", Output: "Colorado Springs"},
        {Input: "Co spgs", Output: "Colorado Springs"},
        {Input: "Spgs", Output: "Springs"},
        {Input: "spgs", Output: "Springs"},
        {Input: "1234 Main St, Co Spgs", Output: "1234 Main St, Colorado Springs"},
        {Input: "1234 Main St, Co Spgs, 22209", Output: "1234 Main St, Colorado Springs, 22209"},
        {Input: "1234 Main St, co spgs", Output: "1234 Main St, Colorado Springs"},
        {Input: "1234 Main St, Spgs", Output: "1234 Main St, Springs"},
        {Input: "1234 Main St, spgs", Output: "1234 Main St, Springs"},
        {Input: "5080 Nc Highway 87 South", Output: "5080 NC Highway 87 South"},
    ]
    let address1 = ""
    for (let i in address1Tests) {
        address1 = cleanUSAddress(address1Tests[i].Input)
        assertEquals(address1, address1Tests[i].Output)
    }
});
