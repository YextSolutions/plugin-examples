

/* export const validateUrl = async (url: string) => {
    return await fetch(url).then(async resp => {
        await resp.body?.cancel();
        if (resp.ok) {
            const responseBody = await resp.text(); // Read the response body
            return url;
        } else {
            console.log('this is the response', resp.json)
            return "INVALID_URL";
        }

    }).catch(() => {
        return "INVALID_URL2";
    });
} */

//console.log('Response:', await validateUrl('https://developer.conga.com/manage-fulfill/reference/billing-preference'))


/*export const validateUrl = async (url: string): Promise<string> => {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const responseBody = await response.text(); // Read the response body
            // Do something with responseBody if needed
            return url;
        } else {
            console.log('this is the response', await response.text()); // Log the response body
            return "INVALID_URL";
        }
    } catch (error) {
        console.error('Error occurred while fetching the URL:', error);
        return "INVALID_URL2";
    }
};*/

export const validateUrl = async (url: string): Promise<string> => {
    try {
        const resp = await fetch(url);
        const body = await resp.text();
        if (resp.ok) {
            console.log('url', url)
            return url;
        } else {
            console.log("URL is not okay:", url);
            return "INVALID_URL";
        }
    } catch (error) {
        console.error(`Error occurred while fetching URL (${url}): ${error}`);
        return "INVALID_URL2";
    }
}