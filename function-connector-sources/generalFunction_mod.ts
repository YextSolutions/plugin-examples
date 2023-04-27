// general func
export const fetchEndpointsInfo = async (inputString: string) => {
    if (inputString === "") {
        return;
    }
    const stringList = inputString;
    const arrayList = stringList.split(",");
    const finalArray = [];
    for (const link of arrayList) {
     const linkResponse = await fetchSingleEndpointInfo(`${link}`);
     if (linkResponse.name) {
        finalArray.push(convertNameToID(linkResponse.name));
     } else if (linkResponse.title) {
        finalArray.push(convertNameToID(linkResponse.title));
     }
    }
    const arrString = finalArray.toString();
    return arrString;
 }
 
 //hit individual endpoint
 const fetchSingleEndpointInfo = async (url: string) => await fetch(url).then(response => response.json());

 //clean up name for use as entity id
 const convertNameToID = (name: string) => {
     const normalizedName = name.replace(/\s+/g, '-').toLowerCase();
     return normalizedName;
 }