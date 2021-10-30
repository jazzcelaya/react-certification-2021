import React from 'react';
import { Link } from 'react-router-dom';
import { StyledRecommendedBar } from '../../styled/VideoDetails.styled';

function RecommnendedBar({ recommended }) {
  console.log(recommended);
  return (
    <StyledRecommendedBar>
      {recommended.map((item) => {
        const { snippet, id } = item;
        const { thumbnails, title } = snippet;
        const { videoId } = id;
        return (
          <Link to={`/${videoId}`}>
            <div className="recommended-box">
              <img alt="youtube video thumbnail" src={thumbnails.medium.url} />
              <p>{title}</p>
            </div>
          </Link>
        );
      })}
    </StyledRecommendedBar>
  );
}

export default RecommnendedBar;
