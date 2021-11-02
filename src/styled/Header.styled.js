import styled from 'styled-components';

export const StyledHeader = styled.header`
  color: white;
  display: flex;
  height: 64px;
  width: 100%;
  background-color: #1c5476;
  justify-content: space-between;
  align-items: center;
`;

export const StyledRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
  padding: 5px;
  align-items: center;
`;

export const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  padding: 0.1rem;
  margin: 0.3rem;
  border-radius: 5px;
  width: 11rem;
  background-color: rgba(255, 255, 255, 0.15);

  input {
    color: white;
    border: none;
    padding: 0.3rem;
    margin: 0.3rem;
    border-radius: 5px;
    width: 10rem;
    background-color: rgba(255, 255, 255, 0);
  }

  input::placeholder {
    color: white;
  }

  .BiSearch {
    margin: 10px;
  }
`;

export const StyledUserIcon = styled.div`
  width: 2.3rem;
  height: 2.3rem;
  margin: 10px;

  img {
    width: inherit;
    height: auto;
    border-radius: 50%;
  }
`;
