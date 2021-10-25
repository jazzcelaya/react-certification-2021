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
          const { thumbnails, title, description } = item.snippet;
          console.log(item);
          return (
            <Card image={thumbnails.high.url} description={description} title={title} />
          );
        })}
      </StyledCardsContainer>
    </StyledCardsGeneralContainer>
  );
}

export default Cards;
