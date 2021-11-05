import styled from 'styled-components';

export const StyledCardsGeneralContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  flex-flow: row wrap;
  background-color: ${(props) => props.theme.backgroundColor};
  overflow: auto;
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
  font-weight: 300;
  margin: 0;
  padding: 30px;
  text-align: center;
  font-size: 60px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  color: ${(props) => props.theme.color};
`;

export const StyledCards = styled.div`
  margin: 10px;
  height: 345px;
  width: 345px;
  border-radius: 5px;
  box-shadow: 0 2px 0 lightgray;
  border: solid 1px lightgray;
  overflow: hidden;

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
    color: ${(props) => props.theme.color};
  }

  p {
    font-size: small;
    color: gray;
    font-weight: 400;
  }

  div {
    margin: 1rem;
  }
`;
