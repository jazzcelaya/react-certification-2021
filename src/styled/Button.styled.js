import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  text-align: center;
  border-radius: 8px;
  padding: 10px;
  color: white;
  margin: 10px;
  font-size: large;
  transition: 0.3s;
  background-color: ${(props) => props.theme.headerColor};

  :hover {
    background-color: #b863a4;
  }
`;
