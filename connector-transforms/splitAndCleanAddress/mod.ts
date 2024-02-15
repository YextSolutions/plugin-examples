const USAddressAbbreviationMatches = [
	{Regex: /(\b)sq(\b)/ig, ReplaceWith: "Square"},
	{Regex: /(\b)av(\b)/ig, ReplaceWith: "Ave"},
	{Regex: /(\b)bl(v?)(\b)/ig, ReplaceWith: "Blvd"},
	{Regex: /(\b)twp(\b)/ig, ReplaceWith: "Township"},
	{Regex: /(\b)hts(\b)/ig, ReplaceWith: "Heights"},
	{Regex: /(\b)est(\b)/ig, ReplaceWith: "Estates"},
	{Regex: /(\b)lk(\b)/ig, ReplaceWith: "Lake"},
	{Regex: /(\b)co spgs(\b)/ig, ReplaceWith: "Colorado Springs"},
	{Regex: /(\b)spgs(\b)/ig, ReplaceWith: "Springs"},
	{Regex: /(\b)hls(\b)/ig, ReplaceWith: "Hills"},
	{Regex: /(\b)vlg(\b)/ig, ReplaceWith: "Village"},
	{Regex: /(\b)bch(\b)/ig, ReplaceWith: "Beach"},
	{Regex: /(\b)crk(\b)/ig, ReplaceWith: "Creek"},
	{Regex: /(\b)pk(\b)/ig, ReplaceWith: "Park"},
	{Regex: /(\b)jctn(\b)/ig, ReplaceWith: "Junction"},
	{Regex: /(\b)vly(\b)/ig, ReplaceWith: "Valley"},
	{Regex: /(\b)est(\b)/ig, ReplaceWith: "Estates"},
	{Regex: /(\b)grv(\b)/ig, ReplaceWith: "Grove"},
]

const USAddressCapitalizationMatches = [
	{Regex: /(\b)llp(\b)/ig, ReplaceWith: "LLP"},
	{Regex: /(\b)mmp(\b)/ig, ReplaceWith: "MMP"},
	{Regex: /(\b)n(\b)/ig, ReplaceWith: "N"},
	{Regex: /(\b)e(\b)/ig, ReplaceWith: "E"},
	{Regex: /(\b)(?<!\')s(\b)/ig, ReplaceWith: "S"},
	{Regex: /(\b)w(\b)/ig, ReplaceWith: "W"},
	{Regex: /(\b)n(\s?)w(\b)/ig, ReplaceWith: "NW"},
	{Regex: /(\b)n(\s?)e(\b)/ig, ReplaceWith: "NE"},
	{Regex: /(\b)s(\s?)w(\b)/ig, ReplaceWith: "SW"},
	{Regex: /(\b)s(\s?)e(\b)/ig, ReplaceWith: "SE"},
	{Regex: /(\b)us(\b)/ig, ReplaceWith: "US"},
	{Regex: /(\b)fm(\b)/ig, ReplaceWith: "FM"},
	{Regex: /1st/ig, ReplaceWith: "1st"},
	{Regex: /2nd/ig, ReplaceWith: "2nd"},
	{Regex: /3rd/ig, ReplaceWith: "3rd"},
	{Regex: /4th/ig, ReplaceWith: "4th"},
	{Regex: /5th/ig, ReplaceWith: "5th"},
	{Regex: /6th/ig, ReplaceWith: "6th"},
	{Regex: /7th/ig, ReplaceWith: "7th"},
	{Regex: /8th/ig, ReplaceWith: "8th"},
	{Regex: /9th/ig, ReplaceWith: "9th"},
	{Regex: /0th/ig, ReplaceWith: "0th"},
	{Regex: /1th/ig, ReplaceWith: "1th"},
	{Regex: /2th/ig, ReplaceWith: "2th"},
	{Regex: /3th/ig, ReplaceWith: "3th"},
]

// USAddressStateMatches uppercases state capitalizations (and DC)
// Excludes states that match other words or abbreviations
// AL (The), CO (Corporation), DE (Of), FL (Floor), IN, LA (The), MA, MT (Mountain), OR, CT (Court)
const USAddressStateMatches = [
	{Regex: /(\b)ak(\b)/ig, ReplaceWith: "AK"},
	{Regex: /(\b)az(\b)/ig, ReplaceWith: "AZ"},
	{Regex: /(\b)ar(\b)/ig, ReplaceWith: "AR"},
	{Regex: /(\b)ca(\b)/ig, ReplaceWith: "CA"},
	{Regex: /(\b)dc(\b)/ig, ReplaceWith: "DC"},
	{Regex: /(\b)ga(\b)/ig, ReplaceWith: "GA"},
	{Regex: /(\b)hi(\b)/ig, ReplaceWith: "HI"},
	{Regex: /(\b)id(\b)/ig, ReplaceWith: "ID"},
	{Regex: /(\b)il(\b)/ig, ReplaceWith: "IL"},
	{Regex: /(\b)ia(\b)/ig, ReplaceWith: "IA"},
	{Regex: /(\b)ks(\b)/ig, ReplaceWith: "KS"},
	{Regex: /(\b)ky(\b)/ig, ReplaceWith: "KY"},
	{Regex: /(\b)me(\b)/ig, ReplaceWith: "ME"},
	{Regex: /(\b)md(\b)/ig, ReplaceWith: "MD"},
	{Regex: /(\b)mi(\b)/ig, ReplaceWith: "MI"},
	{Regex: /(\b)mn(\b)/ig, ReplaceWith: "MN"},
	{Regex: /(\b)ms(\b)/ig, ReplaceWith: "MS"},
	{Regex: /(\b)mo(\b)/ig, ReplaceWith: "MO"},
	{Regex: /(\b)ne(\b)/ig, ReplaceWith: "NE"},
	{Regex: /(\b)nv(\b)/ig, ReplaceWith: "NV"},
	{Regex: /(\b)nh(\b)/ig, ReplaceWith: "NH"},
	{Regex: /(\b)nj(\b)/ig, ReplaceWith: "NJ"},
	{Regex: /(\b)nm(\b)/ig, ReplaceWith: "NM"},
	{Regex: /(\b)ny(\b)/ig, ReplaceWith: "NY"},
	{Regex: /(\b)nc(\b)/ig, ReplaceWith: "NC"},
	{Regex: /(\b)nd(\b)/ig, ReplaceWith: "ND"},
	{Regex: /(\b)oh(\b)/ig, ReplaceWith: "OH"},
	{Regex: /(\b)ok(\b)/ig, ReplaceWith: "OK"},
	{Regex: /(\b)pa(\b)/ig, ReplaceWith: "PA"},
	{Regex: /(\b)ri(\b)/ig, ReplaceWith: "RI"},
	{Regex: /(\b)sc(\b)/ig, ReplaceWith: "SC"},
	{Regex: /(\b)sd(\b)/ig, ReplaceWith: "SD"},
	{Regex: /(\b)tn(\b)/ig, ReplaceWith: "TN"},
	{Regex: /(\b)tx(\b)/ig, ReplaceWith: "TX"},
	{Regex: /(\b)ut(\b)/ig, ReplaceWith: "UT"},
	{Regex: /(\b)vt(\b)/ig, ReplaceWith: "VT"},
	{Regex: /(\b)va(\b)/ig, ReplaceWith: "VA"},
	{Regex: /(\b)wa(\b)/ig, ReplaceWith: "WA"},
	{Regex: /(\b)wv(\b)/ig, ReplaceWith: "WV"},
	{Regex: /(\b)wi(\b)/ig, ReplaceWith: "WI"},
	{Regex: /(\b)wy(\b)/ig, ReplaceWith: "WY"},
]

const GenericCapitalizationMatches = [
	{Regex: /(\b)mcm/ig, ReplaceWith: "McM"},
	{Regex: /(\b)mcs/ig, ReplaceWith: "McS"},
	{Regex: /(\b)mcc/ig, ReplaceWith: "McC"},
	{Regex: /(\b)mck/ig, ReplaceWith: "McK"},
	{Regex: /(\b)mcg/ig, ReplaceWith: "McG"},
	{Regex: /(\b)mca/ig, ReplaceWith: "McA"},
	{Regex: /(\b)mcb/ig, ReplaceWith: "McB"},
	{Regex: /(\b)mcl/ig, ReplaceWith: "McL"},
	{Regex: /(\b)mcf/ig, ReplaceWith: "McF"},
	{Regex: /(\b)mcv/ig, ReplaceWith: "McV"},
	{Regex: /(\b)mch/ig, ReplaceWith: "McH"},
	{Regex: /(\b)mcn/ig, ReplaceWith: "McN"},
	{Regex: /(\b)mcd/ig, ReplaceWith: "McD"},
	{Regex: /(\b)mcp/ig, ReplaceWith: "McP"},
	{Regex: /(\b)macc/ig, ReplaceWith: "MacC"},
	{Regex: /(\b)o's/ig, ReplaceWith: "O'S"},
	{Regex: /'S(\b)/g, ReplaceWith: "'s"},
]

const NameCapitalizationMatches = [
	{Regex: /(\b)ii(\b)/ig, ReplaceWith: "II"},
	{Regex: /(\b)llc(\b)/ig, ReplaceWith: "LLC"},
	{Regex: /(\b)iii(\b)/ig, ReplaceWith: "III"},
	{Regex: /(\b)iv(\b)/ig, ReplaceWith: "IV"},
	{Regex: /(\b)llm(\b)/ig, ReplaceWith: "LLM"},
	{Regex: /(\b)od(\b)/ig, ReplaceWith: "OD"},
	{Regex: /(\b)dds(\b)/ig, ReplaceWith: "DDS"},
	{Regex: /(\b)md(\b)/ig, ReplaceWith: "MD"},
]

const letterAfterNumberRegex = /(\b)[0-9]+[a-z](\b)/g
const trailingPunctuationRegex  = /[,|/:|;|-]$/g

const USAddress1Flags = ["alley", "aly", "annex", "anx", "arcade", "arc", "avenue", "ave", "bayoo", "byu",
	"beach", "bch", "bend", "bnd", "bluff", "blf", "bluffs", "blfs", "bottom", "btm", "boulevard", "blvd", "branch",
	"br", "bridge", "brg", "brook", "brk", "brooks", "brks", "burg", "bg", "burgs", "bgs", "bypass", "byp", "camp",
	"cp", "canyon", "cyn", "cape", "cpe", "causeway", "cswy", "center", "ctr", "centers", "ctrs", "circle", "cir",
	"cliff", "clf", "club", "clb", "common", "cmn", "corner", "cor", "course", "crse", "court", "ct", "cove", "cv",
	"creek", "crk", "crescent", "cres", "crest", "crst", "crossing", "xing", "crossroad", "xrd", "curve", "curv",
	"dale", "dl", "dam", "dm", "divide", "dv", "drive", "dr", "estate", "est", "expressway", "expy", "extension",
	"ext", "fall", "falls", "fls", "ferry", "fry", "field", "fld", "flat", "flt", "flats", "flts", "fm", "ford", "frd",
	"forest", "frst", "forge", "frg", "fork", "frk", "fort", "ft", "freeway", "fwy", "garden", "gdn", "gateway", "gtwy",
	"glen", "gln", "green", "grn", "grove", "grv", "harbor", "hbr", "haven", "hvn", "heights", "hts", "highway", "hwy",
	"hill", "hl", "hills", "hls", "hollow", "holw", "inlet", "inlt", "interstate", "i", "island", "is", "islands",
	"iss", "isle", "junction", "jct", "key", "ky", "knoll", "knl", "lake", "lk", "lakes", "lks", "land", "land",
	"landing", "lndg", "lane", "ln", "light", "lgt", "lights", "lgts", "loaf", "lf", "lock", "lck", "lodge", "ldg", "loop",
	"mall", "manor", "mnr", "meadow", "mdw", "mews", "mill", "ml", "mission", "msn", "moorhead", "mhd", "motorway", "mtwy",
	"mount", "mt", "mountain", "mtn", "mountains", "mtns", "neck", "nck", "orchard", "orch", "oval", "overpass", "opas",
	"park", "parkway", "pkwy", "pass", "path", "pike", "pine", "pne", "place", "pl", "plain", "pln", "plaza", "plz",
	"point", "pt", "port", "prt", "prairie", "pr", "radial", "radl", "ramp", "ranch", "rnch", "rapid", "rpd", "rapids",
	"rpds", "rest", "rst", "ridge", "rdg", "river", "riv", "road", "rd", "roads", "rds", "route", "rte", "row", "rr", "rue",
	"run", "shoal", "shl", "shore", "shr", "skyway", "skwy", "spring", "spg", "spur", "square", "sq", "station", "sta",
	"stream", "strm", "street", "st", "summit", "smt", "terrace", "ter", "throughway", "trwy", "trace", "trce", "track",
	"trak", "trail", "trl", "tunnel", "tunl", "turnpike", "tpke", "underpass", "upas", "union", "un", "valley", "vly", "viaduct",
	"via", "view", "vw", "village", "vlg", "ville", "vl", "vista", "vis", "walk", "wall", "way", "well", "wl"]

const USAddress2Flags = ["apartment", "apt", "building", "bldg", "department", "dept", "floor", "fl", "lot", "office", "ofc",
	"room", "rm", "space", "spc", "suite", "suites", "ste", "unit"]

export function splitAndCleanUSAddress(row : {input: string} ) {
	if (typeof row.input !== 'string') {
		return null;
	  }
	let {address1, address2} = splitUSAddress(row.input)
	address1 = cleanUSAddress(address1)
	address2 = cleanUSAddress(address2)
    
    return {address1: address1, address2: address2}
}



export function splitUSAddress(input: string) {
	let addressTokens = input.split(" ")
	let lastAddress2Indx = -1

	for (let i = addressTokens.length - 1; i >= 0; i-- ) {
		let token = addressTokens[i]
		if (isUSAddress2Flag(token, input)) {
			lastAddress2Indx = i
		} else if (isUSAddress1Flag(token)) {
			if (lastAddress2Indx > -1) {
				return {address1: addressTokens.slice(0,lastAddress2Indx).join(" "), address2: addressTokens.slice(lastAddress2Indx).join(" ")}
			} else {
				//special checking to handle seeing an 'I' before an address1 flag was seen
				if (token.toLowerCase() == "i") {
					continue
				}
				return {address1: input, address2: ""}
			}
		}
	}

	if (lastAddress2Indx > -1) {
		return {address1: addressTokens.slice(0,lastAddress2Indx).join(" "), address2: addressTokens.slice(lastAddress2Indx).join(" ")}
	}
	return {address1: input, address2: ""}
}

export function cleanUSAddress(input: string) {
	for (let r in USAddressAbbreviationMatches) {
		input = input.replaceAll(USAddressAbbreviationMatches[r].Regex, USAddressAbbreviationMatches[r].ReplaceWith)
	}
	input = cleanEnglishText(input)
	for (let r in USAddressCapitalizationMatches) {
		input = input.replaceAll(USAddressCapitalizationMatches[r].Regex, USAddressCapitalizationMatches[r].ReplaceWith)
	}
	input = capitalizeLetterAfterNumber(input)
	for (let r in USAddressStateMatches) {
		input = input.replaceAll(USAddressStateMatches[r].Regex, USAddressStateMatches[r].ReplaceWith)
	}
	input = removeTrailingPunctuationAndSpaces(input)
	return input
}


function upperCase(match: string) {
	return match.toUpperCase()
}


export function capitalizeLetterAfterNumber(input: string) {
	return input.replace(letterAfterNumberRegex, upperCase)
}


export function removeTrailingPunctuationAndSpaces(input: string) {
	input = input.trim();
	input = input.replaceAll(trailingPunctuationRegex, "")
	input = input.trim();
	return input
}

function titleCase(input: string) {
	return input.toLowerCase().split(" ").reduce( (s, c) =>
      s +""+(c.charAt(0).toUpperCase() + c.slice(1) +" "), '');
}

export function cleanEnglishText(input: string) {
	input = titleCase(input)
	for (let r in GenericCapitalizationMatches) {
		input = input.replaceAll(GenericCapitalizationMatches[r].Regex, GenericCapitalizationMatches[r].ReplaceWith)
	}
	return input.trim()
}


export function cleanEnglishName(input: string) {
	input = cleanEnglishText(input)
	for (let r in NameCapitalizationMatches) {
		input = input.replaceAll(NameCapitalizationMatches[r].Regex, NameCapitalizationMatches[r].ReplaceWith)
	}
	return input.trim()
}


function isUSAddress1Flag(token: string) {
	token = token.toLowerCase()
	for (let i in USAddress1Flags) {
		if (USAddress1Flags[i] == token) {
			return true
		}
	}
	return false
}

const suiteAsNumberRegex = /^#(.)*$/

function isUSAddress2Flag(token: string, address: string) {
	token = token.toLowerCase()
	if (token.match(suiteAsNumberRegex)) {
		return true
	}

	token = token.replace(/\.$/, "")
	for (let i in USAddress2Flags) {
		if (USAddress2Flags[i] == token) {
			if (!isUSAddress2FlagException(token, address)) {
				return true
			}
			return false
		}
	}
	return false
}

function isUSAddress2FlagException(token: string, address: string) {
	if (token == "ste"){
		if (address.match(/^[0-9]+ Ste[.]* [\D]+/i)) { //Ste. can also abbreviate Sainte
			return true
		}
	}
	return false
}

const output = splitAndCleanUSAddress('1620 N Carpenter Rd Bldg D Ste 57B');
console.log(output);
