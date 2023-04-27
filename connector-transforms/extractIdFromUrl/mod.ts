// Extracts all characters in a string after the last instance of the string "api/"
export function afterSubstring(url: string) {
    var substring = "api/"
    var id = url.substring(url.lastIndexOf(substring)+substring.length)
    id = id.split('/').join('')
    return id
}

// Extracts the last 5 characters in a string
export function lastFiveChars(url: string) {
    var id = url.substring(url.length - 5)
    return id
}

// Extracts the last path segment in a URL string, e.g. "abc123" in URL "https://www.test.com/testing/abc123/"
export function lastPathSegment(url: string) {
    var regex = /[^\/]+(?=\/$|$)/
    var match = url.match(regex)
    var id = ""
    if (match) {
        var id = match[0]
    } 
    return `${id}`
}