import React, { useEffect, useState } from 'react';
import {
  StyledCardsContainer,
  StyledCardsGeneralContainer,
  StyledWelcomeHeader,
} from '../../styled/Cards.styled';
import Card from '../Card/Card.component';

function Favourites({ favourites }) {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    setvideos(favourites);
  }, [favourites]);

  return (
    <StyledCardsGeneralContainer data-testid="favourites-cards">
      <StyledWelcomeHeader data-testid="favourites-header">
        Your Favourites
      </StyledWelcomeHeader>
      <StyledCardsContainer>
        {videos.map((video) => {
          const { videoId, videoTitle, videoDescription, videoThumbnailUrl, key } = video;
          return (
            <Card
              image={videoThumbnailUrl}
              description={videoDescription}
              title={videoTitle}
              videoId={videoId}
              key={key}
              baseLink="favs/"
            />
          );
        })}
      </StyledCardsContainer>
    </StyledCardsGeneralContainer>
  );
}

export default Favourites;
