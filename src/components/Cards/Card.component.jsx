import React from 'react';
import { StyledCards } from '../../styled/Cards.styled';

const Card = ({ image, title, description }) => {
  return (
    <StyledCards data-testid="card">
      <img alt="card" src={image} data-testid="card-image" />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </StyledCards>
  );
};

export default Card;
