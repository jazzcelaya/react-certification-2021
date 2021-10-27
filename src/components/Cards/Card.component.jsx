import React from 'react';
import { StyledCards } from '../../styled/Cards.styled';

const Card = (props) => {
  return (
    <StyledCards>
      <img alt="test" src={props.image} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </StyledCards>
  );
};

export default Card;
