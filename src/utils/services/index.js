import axios from 'axios';

export async function getVideos(keyword) {
  const searchBaseUrl = `https://www.googleapis.com/youtube/v3/search?maxResults=25&key=${process.env.REACT_APP_API_KEY}&part=snippet&q=${keyword}`;
  console.log(searchBaseUrl);
  try {
    const response = await axios({
      url: searchBaseUrl,
      method: 'GET',
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getVideoDetails(videoId) {
  try {
    const videoBaseUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.REACT_APP_API_KEY}&part=snippet`;
    const response = await axios({
      url: videoBaseUrl,
      method: 'GET',
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
