import axios from 'axios';

const baseUrl = 'https://www.googleapis.com/youtube/v3';
const apiKey = process.env.REACT_APP_API_KEY;
const maxResults = 25;

export async function getVideos(keyword) {
  const searchUrl = `${baseUrl}/search?maxResults=${maxResults}&key=${apiKey}&part=snippet&q=${keyword}`;
  try {
    const response = await axios({
      url: searchUrl,
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
    const videoUrl = `${baseUrl}/videos?id=${videoId}&key=${apiKey}&part=snippet`;
    const response = await axios({
      url: videoUrl,
      method: 'GET',
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
