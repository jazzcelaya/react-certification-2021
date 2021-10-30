import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { StyledVideoDetails } from '../../styled/VideoDetails.styled';
import RecommnendedBar from './RecommendedBar.component';
import { getVideos } from '../../utils/services';

function VideoDetails() {
  const { videoId } = useParams();
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    async function loadVideos() {
      const response = await getVideos();
      if (response.status === 200) {
        setRecommended(response.data.items);
      }
    }
    loadVideos();
  }, []);

  return (
    <StyledVideoDetails>
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allowFullScreen
        />
        <h2>title</h2>
        <p>description</p>
      </div>
      <RecommnendedBar recommended={recommended} />
    </StyledVideoDetails>
  );
}

export default VideoDetails;
