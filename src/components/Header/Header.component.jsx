import React from 'react';
import { BiMenu } from 'react-icons/bi';
import {
  StyledHeader,
  StyledRowContainer,
  StyledUserIcon,
  StyledModeToogle,
} from '../../styled/Header.styled';
import SearchBar from './SearchBar.component';

function HeaderBar({ keyword, setKeyword }) {
  return (
    <StyledHeader>
      <StyledRowContainer>
        <BiMenu />
        <SearchBar setKeyword={setKeyword} keyword={keyword} />
      </StyledRowContainer>
      <StyledRowContainer>
        <StyledModeToogle htmlFor="darkmode-switch" id="darkmode-switch">
          <input dara-testid="searchbar-input" id="darkmode-switch" type="checkbox" />
          <span className="slider round" />
        </StyledModeToogle>
        <p>Dark Mode</p>
        <StyledUserIcon>
          <img alt="user" src="default_user.webp" />
        </StyledUserIcon>
      </StyledRowContainer>
    </StyledHeader>
  );
}

export default HeaderBar;
