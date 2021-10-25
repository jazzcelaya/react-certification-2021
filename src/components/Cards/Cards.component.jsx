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
    <StyledCardsGeneralContainer>
      <StyledWelcomeHeader>Welcome to the Challenge!</StyledWelcomeHeader>
      <StyledCardsContainer>
        {items.map((item) => {
          const { snippet } = item;
          console.log(snippet.thumbnails.default.url);
          return <Card image={snippet.thumbnails.default.url} />;
        })}
      </StyledCardsContainer>
    </StyledCardsGeneralContainer>
  );
}

export default Cards;
