import React from 'react';
import { StyledCards } from '../../styled/Cards.styled';

const Card = (props) => {
  return (
    <StyledCards>
      <img
        alt="test"
        src={props.image}
        style={{ width: '100%', height: '50%', objectFit: 'cover' }}
      />
    </StyledCards>
  );
};

export default Card;
