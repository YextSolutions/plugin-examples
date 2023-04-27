// Declare variable
declare const account: string;

// Appends account subdomain and article ID generate a full URL
export function createFreshdeskSolutionUrl(articleId: string) {
    if (`${account}`.includes(".freshdesk.com")) {  
        var url = `${account}` + "/support/solutions/articles/" + articleId
        }   
        else if (`${account}`.includes(".")) {
        var url = `${account}` + "/support/solutions/articles/" + articleId    
        }
        else {
        var url = `${account}` + ".freshdesk.com/support/solutions/articles/" + articleId    
        }
    return url
}
