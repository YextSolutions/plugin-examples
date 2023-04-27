export function codeToCurrency(code: string) {
    
    const searcher = `currencySymbol">`;
    const indexOf = code.indexOf(searcher);

    const stringWithoutBeginning = code.slice(indexOf + searcher.length);
    const indexOfSemi = stringWithoutBeginning.indexOf('</span>');
    const finalValue = stringWithoutBeginning.slice(0, (indexOfSemi - stringWithoutBeginning.length));

    return currencyMapping(finalValue);
}

//define function to convert HMTL code to Accepted Yext Currency Value (dictionary is comprehensive )
function currencyMapping(code: string) {
    const dict: { [index: string]: string; } = {
        "&#36;": "USD",
        "&#163;": "GBP",
        "&#165;": "JPY",
        "&#8355;": "CHF",
        "&#8356" : "TRY",
        "&#8359;" : "ESP",
        "&#128;" : "EUR",
        "&#x20B9;" : "INR",
        "&#8361;" : "KRW",
        "&#8372;" : "UAH",
        "&#8366;" : "MNT",
        "&#8370;" : "PYG",
        "&#8369;" : "PHP",
        "&#8373;" : "GHS",
        "&#8365;" : "LAK",
        "&#8362;" : "ILS",
        "&#8363;" : "VND"
    };

    if(dict[code]) {
        return dict[code] 
    }

    else {
        return `USD`
    }
}