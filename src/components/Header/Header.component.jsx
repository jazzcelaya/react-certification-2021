import React from 'react';
import { BiMenu } from 'react-icons/bi';
import {
  StyledHeader,
  StyledRowContainer,
  StyledUserIcon,
} from '../../styled/Header.styled';
import SearchBar from './SearchBar.component';
import Switcher from '../Switcher';

function HeaderBar({ keyword, setKeyword, toogleTheme }) {
  return (
    <StyledHeader>
      <StyledRowContainer>
        <BiMenu />
        <SearchBar setKeyword={setKeyword} keyword={keyword} />
      </StyledRowContainer>
      <StyledRowContainer>
        <Switcher toogleTheme={toogleTheme} />
        <p>Dark Mode</p>
        <StyledUserIcon>
          <img alt="user" src="default_user.webp" />
        </StyledUserIcon>
      </StyledRowContainer>
    </StyledHeader>
  );
}

export default HeaderBar;
