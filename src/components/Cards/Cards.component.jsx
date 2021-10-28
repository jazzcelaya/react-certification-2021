import React from 'react';
import {
  StyledCardsContainer,
  StyledCardsGeneralContainer,
  StyledWelcomeHeader,
} from '../../styled/Cards.styled';
import Card from './Card.component';
import mock from './mock.data';

function Cards({ items }) {
  const itemsArray = items || mock.items;
  return (
    <StyledCardsGeneralContainer data-testid="cards">
      <StyledWelcomeHeader data-testid="welcome-header">
        Welcome to the Challenge!
      </StyledWelcomeHeader>
      <StyledCardsContainer>
        {itemsArray.map((item, i) => {
          const { etag, snippet } = item;
          const { thumbnails, title, description } = snippet;
          const key = etag + i;
          return (
            <Card
              image={thumbnails.high.url}
              description={description}
              title={title}
              key={key}
            />
          );
        })}
      </StyledCardsContainer>
    </StyledCardsGeneralContainer>
  );
}

export default Cards;
