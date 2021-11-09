import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { BiBookmarkHeart } from 'react-icons/bi';
import GeneralContext from '../../state/GeneralContext';
import { StyledVideoDetails } from '../../styled/VideoDetails.styled';
import RecommnendedBar from './RecommendedBar.component';
import { getVideoDetails, getVideos } from '../../utils/services';
import { StyledButton } from '../../styled/Button.styled';

function VideoDetails({ toggleFavourite }) {
  const { keyword } = useContext(GeneralContext);
  const { videoId } = useParams();
  const [recommended, setRecommended] = useState([]);
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDetails, setVideoDetails] = useState({});

  useEffect(() => {
    async function loadVideos() {
      const videosResponse = await getVideos(keyword);
      const detailsResponse = await getVideoDetails(videoId);
      if (videosResponse.status === 200) {
        setRecommended(videosResponse.data.items);
      }
      if (detailsResponse.status === 200) {
        const { etag, id } = detailsResponse.data.items[0];
        const { description, title, thumbnails } = detailsResponse.data.items[0].snippet;
        setVideoTitle(title);
        setVideoDetails({
          description,
          videoThumbnailUrl: thumbnails.high.url,
          etag,
          id,
        });
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
        <StyledButton
          onClick={(e) => {
            e.preventDefault();
            toggleFavourite({
              videoId,
              videoTitle,
              videoDescription: videoDetails.description,
              videoThumbnailUrl: videoDetails.videoThumbnailUrl,
              etag: videoDetails.etag,
            });
          }}
        >
          <BiBookmarkHeart /> Favourite
        </StyledButton>
        <h2>{videoTitle}</h2>
        <p>{videoDetails.description}</p>
      </div>
      <RecommnendedBar recommended={recommended} />
    </StyledVideoDetails>
  );
}

export default VideoDetails;
