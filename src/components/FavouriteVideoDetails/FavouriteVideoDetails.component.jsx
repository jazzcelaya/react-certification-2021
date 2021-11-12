import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { BiBookmarkHeart } from 'react-icons/bi';
import { StyledVideoDetails } from '../../styled/VideoDetails.styled';
import FavouritesSideBar from './FavouritesSideBar.component';
import { getVideoDetails } from '../../utils/services';
import { StyledButton } from '../../styled/Button.styled';

function FavouriteVideoDetails({ toggleFavourite, favourites }) {
  const { videoId } = useParams();
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDetails, setVideoDetails] = useState({});

  useEffect(() => {
    async function loadVideos() {
      const detailsResponse = await getVideoDetails(videoId);

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
  }, [videoId]);

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
      <FavouritesSideBar favourites={favourites} />
    </StyledVideoDetails>
  );
}

export default FavouriteVideoDetails;
