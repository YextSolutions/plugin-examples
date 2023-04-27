// Prepends the base URL to an ID string to generate a full URL
export function prependBaseUrl(id: string) {
    var url = "https://www.test.com/testing?id=" + id
    return url
}