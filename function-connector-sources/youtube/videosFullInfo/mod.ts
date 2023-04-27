declare const API_KEY: string;
declare const CHANNEL_ID: string;

const fetchVideoInfoUrl = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,statistics,contentDetails&id=`;

export const fetchVideos = async (inputString: string) => {
    const inputJson = JSON.parse(inputString);
    const pageToken = inputJson.pageToken;

    let fetchVideoListUrl = `https://www.googleapis.com/youtube/v3/search/?key=${API_KEY}&channelId=${CHANNEL_ID}&type=video&maxResults=50`;
    if(pageToken){
        fetchVideoListUrl = fetchVideoListUrl + `&pageToken=${pageToken}`;
    }

    const videosResponse = await fetch(fetchVideoListUrl).then(response => response.json());
    const videoIds = videosResponse.items.map(video => video.id.videoId);


    const videos = [];
    for (const videoId of videoIds) {
        const videoInfoResponse = await fetchVideoInfo(videoId);
        videos.push(videoInfoResponse.items[0])
    }

    const response = { data: { videos } };

    if(videosResponse.nextPageToken){
        response['nextPageToken'] = videosResponse.nextPageToken
    } 

    return JSON.stringify(response)

}

const fetchVideoInfo = async (videoId: string) => await fetch(`${fetchVideoInfoUrl}${videoId}`).then(response => response.json());
  