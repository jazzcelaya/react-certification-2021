import React from 'react';
import { Link } from 'react-router-dom';
import { StyledRecommendedBar } from '../../styled/VideoDetails.styled';

function FavouritesSideBar({ favourites }) {
  return (
    <StyledRecommendedBar>
      {favourites.map((item) => {
        const { videoThumbnailUrl, videoTitle, videoId } = item;
        return (
          <Link to={`/favs/${videoId}`}>
            <div className="recommended-box">
              <img alt="youtube video thumbnail" src={videoThumbnailUrl} />
              <p>{videoTitle}</p>
            </div>
          </Link>
        );
      })}
    </StyledRecommendedBar>
  );
}

export default FavouritesSideBar;
