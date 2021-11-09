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
    <StyledCardsGeneralContainer data-testid="cards">
      <StyledWelcomeHeader data-testid="welcome-header">
        Welcome to the Challenge!
      </StyledWelcomeHeader>
      <StyledCardsContainer>
        {items.map((item, i) => {
          const { etag, snippet, id } = item;
          const { thumbnails, title, description } = snippet;
          const { videoId } = id;
          const key = etag + i;
          return (
            <Card
              image={thumbnails.high.url}
              description={description}
              title={title}
              videoId={videoId}
              key={key}
            />
          );
        })}
      </StyledCardsContainer>
    </StyledCardsGeneralContainer>
  );
}

export default Favourites;
