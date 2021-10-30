import axios from 'axios';

const baseUrl = `https://www.googleapis.com/youtube/v3/search?maxResults=25&key=${process.env.REACT_APP_API_KEY}&part=snippet`;

export async function getVideos() {
  try {
    const response = await axios({
      url: baseUrl,
      method: 'GET',
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
