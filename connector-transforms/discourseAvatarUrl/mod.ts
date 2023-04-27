declare var domainHost: string;

export function fix_avatar_template(avatar_url: string) {
    // var avatar_url = avatar_url.format(size='20')
    let re = /,\//gi
    let re2 = /^\//gi
    let httpRegex = /https?:\/\/|\/.*/gi
    var sanitizedDomainHost = "https://" + domainHost.replace(httpRegex, '')
    let full_url = avatar_url.replace(re, "," + sanitizedDomainHost + "/").replace(re2, sanitizedDomainHost + "/")
    // if (avatar_url.startsWith('https')===false) {
    //     avatar_url = (domainHost + avatar_url)
    // }
    return full_url
}