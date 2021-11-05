import React from 'react';
import { Link } from 'react-router-dom';
import { StyledCards } from '../../styled/Cards.styled';

const Card = ({ image, title, description, videoId }) => {
  const link = `/${videoId}`;
  return (
    <Link to={link}>
      <StyledCards data-testid="card">
        <img alt="card" src={image} data-testid="card-image" />
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </StyledCards>
    </Link>
  );
};

export default Card;
