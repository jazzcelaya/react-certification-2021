import React from 'react';
import { StyledCards } from '../../styled/Cards.styled';

const Card = (props) => {
  return (
    <StyledCards data-testid="card">
      <img alt="card" src={props.image} />
      <div key={props.key}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </StyledCards>
  );
};

export default Card;
