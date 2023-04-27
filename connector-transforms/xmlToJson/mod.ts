import { xml2js } from "https://deno.land/x/xml2js@1.0.0/mod.ts";

const myHeaders = new Headers();
// add authentication header if necessary
const requestOptions = {
  method: 'GET',
  headers: myHeaders,
};


export const xmlConverter = async (inputString: string) => {
    const xmlEndpoint = "XML_ENDPOINT";

    // fetch XML data and convert to json
    const xmlContent = await fetch(xmlEndpoint, requestOptions).then(response => response.text());
    const jsonContent = xml2js(xmlContent, {compact: true});
    
    // select and manipulate JSON as needed and return final data to platform
    const response = { data: jsonContent }
    return JSON.stringify(response);
}