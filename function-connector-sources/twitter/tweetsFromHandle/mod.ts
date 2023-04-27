declare const twitterHandle: string;

const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAGuvSQEAAAAARoDsPDyNl9NZmlO%2Bc7nHhOiEaA8%3DtetUPN9LDJE1zWgCCtshfV6inpU6zwH0R3poKvahRP4NUapEgN");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
}

export const fetchTweets = async (inputString: string) => {
    const inputJson = JSON.parse(inputString);
    const pageToken = inputJson.pageToken;

    const userId = await getUserId();
    let fetchTweetListUrl = `https://api.twitter.com/2/users/${userId}/tweets?exclude=retweets&expansions=author_id,attachments.media_keys&max_results=100&media.fields=preview_image_url,url&tweet.fields=created_at,referenced_tweets,text,public_metrics,author_id,source,possibly_sensitive&user.fields=profile_image_url,name,username,verified`;
    if (pageToken) {
        fetchTweetListUrl = fetchTweetListUrl + `&pagination_token=${pageToken}`;
    }

    const tweetsResponse = await fetch(fetchTweetListUrl, requestOptions).then(response => response.json());
    const response = { data: { tweetsResponse } };

    if (tweetsResponse.meta.next_token) {
        response['nextPageToken'] = tweetsResponse.meta.next_token;
    }

    return JSON.stringify(response);
}

const getUserId = async () => {
    let cleanedUserId = twitterHandle;
    if (cleanedUserId.indexOf("@") === 0) {
        cleanedUserId = twitterHandle.substring(1);
    }
    const fetchIdUrl = `https://api.twitter.com/2/users/by/username/${cleanedUserId}`
    const userInfo = await fetch(fetchIdUrl, requestOptions).then(response => response.json());
    const userId = userInfo.data.id;
    return userId;
}