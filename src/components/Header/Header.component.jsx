import React from 'react';
import { BiMenu, BiSearch } from 'react-icons/bi';
import {
  StyledHeader,
  StyledRowContainer,
  StyledSearchBar,
  StyledUserIcon,
  StyledModeToogle,
} from '../../styled/Header.styled';

function HeaderBar() {
  return (
    <StyledHeader>
      <StyledRowContainer>
        <BiMenu />
        <StyledSearchBar>
          <BiSearch />
          <input type="text" placeholder="wizeline" />
        </StyledSearchBar>
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
