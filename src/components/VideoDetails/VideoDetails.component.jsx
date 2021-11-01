import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import GeneralContext from '../../state/GeneralContext';
import { StyledVideoDetails } from '../../styled/VideoDetails.styled';
import RecommnendedBar from './RecommendedBar.component';
import { getVideoDetails, getVideos } from '../../utils/services';

function VideoDetails() {
  const { keyword } = useContext(GeneralContext);
  const { videoId } = useParams();
  const [recommended, setRecommended] = useState([]);
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');

  useEffect(() => {
    async function loadVideos() {
      const response = await getVideos(keyword);
      const detailsResponse = await getVideoDetails(videoId);
      if (response.status === 200) {
        setRecommended(response.data.items);
      }
      if (detailsResponse.status === 200) {
        const { description, title } = detailsResponse.data.items[0].snippet;
        setVideoTitle(title);
        setVideoDescription(description);
      }
    }
    loadVideos();
  }, [keyword, videoId]);

  return (
    <StyledVideoDetails>
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allowFullScreen
        />
        <h2>{videoTitle}</h2>
        <p>{videoDescription}</p>
      </div>
      <RecommnendedBar recommended={recommended} />
    </StyledVideoDetails>
  );
}

export default VideoDetails;
