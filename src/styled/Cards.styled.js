import styled from 'styled-components';

export const StyledCardsGeneralContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  flex-flow: row wrap;
`;

export const StyledCardsContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-around;
  flex-flow: row wrap;
`;

export const StyledWelcomeHeader = styled.h1`
  width: 100%;
  font-weight: 200;
  text-align: center;
  font-size: 3.5rem;
`;

export const StyledCards = styled.div`
  margin: 10px;
  height: 345px;
  width: 345px;
  border-radius: 5px;
  box-shadow: 0 2px 0 lightgray;
  border: solid 1px lightgray;

  img {
    width: 100%;
    height: 40%;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }

  h2 {
    margin: 0;
    font-weight: 400;
    font-size: 1.2rem;
  }

  p {
    font-size: small;
    color: gray;
  }

  div {
    margin: 1rem;
  }
`;
