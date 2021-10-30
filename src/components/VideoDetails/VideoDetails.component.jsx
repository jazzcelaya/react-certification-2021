import React from 'react';
import { useParams } from 'react-router';
import { StyledVideoDetails } from '../../styled/VideoDetails.styled';
import RecommnendedBar from './RecommendedBar.component';

function VideoDetails() {
  const { videoId } = useParams();
  return (
    <StyledVideoDetails>
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allowFullScreen
        />
      </div>
      <RecommnendedBar />
    </StyledVideoDetails>
  );
}

export default VideoDetails;
