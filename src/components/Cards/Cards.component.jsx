import React from 'react';
import {
  StyledCardsContainer,
  StyledCardsGeneralContainer,
  StyledWelcomeHeader,
} from '../../styled/Cards.styled';
import Card from './Card.component';
import mock from './mock.data';

function Cards() {
  const { items } = mock;
  return (
    <StyledCardsGeneralContainer data-testid="cards">
      <StyledWelcomeHeader data-testid="welcome-header">Welcome to the Challenge!</StyledWelcomeHeader>
      <StyledCardsContainer>
        {items.map((item) => {
          const { etag, snippet } = item;
          const { thumbnails, title, description } = snippet;
          return (
            <Card
              image={thumbnails.high.url}
              description={description}
              title={title}
              key={etag}
            />
          );
        })}
      </StyledCardsContainer>
    </StyledCardsGeneralContainer>
  );
}

export default Cards;
