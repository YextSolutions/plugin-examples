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
