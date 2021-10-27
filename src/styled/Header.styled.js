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

export const StyledModeToogle = styled.div`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 100%;
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
