import React, { useEffect, useState } from 'react';
import {
  StyledCardsContainer,
  StyledCardsGeneralContainer,
  StyledWelcomeHeader,
} from '../../styled/Cards.styled';
import Card from '../Cards/Card.component';

function Favourites({ favourites }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(favourites);
  }, [favourites]);

  return (
    <StyledCardsGeneralContainer data-testid="favourites-cards">
      <StyledWelcomeHeader data-testid="favourites-header">
        Your Favourites
      </StyledWelcomeHeader>
      <StyledCardsContainer>
        {items.map((item) => {
          const { videoId, videoTitle, videoDescription, videoThumbnailUrl, key } = item;
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
