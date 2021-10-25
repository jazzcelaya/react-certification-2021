import styled from 'styled-components';

export const StyledHeader = styled.header`
  color: white;
  display: flex;
  height: 3rem;
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
`;

export const StyledSearchBar = styled.input`
  border: none;
  padding: 0.3rem;
  margin: 0.3rem;
  border-radius: 5px;
  width: 10rem;
  background-color: rgba(255, 255, 255, 0.15);

  ::placeholder {
    color: white;
  }
`;

export const StyledUserIcon = styled.div`
  border-radius: 50%;
  width: 2rem;
  background-color: whitesmoke;
`;

export const StyledModeToogle = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  margin: 5px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;

    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
