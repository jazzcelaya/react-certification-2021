import React, { useContext } from 'react';
import { BiMenu } from 'react-icons/bi';
import GeneralContext from '../../state/GeneralContext';
import ThemeContext from '../../state/ThemeContext';
import {
  StyledHeader,
  StyledRowContainer,
  StyledUserIcon,
} from '../../styled/Header.styled';
import ToggleSwitch from './ToggleSwitch.components';
import SearchBar from './SearchBar.component';

function HeaderBar() {
  const { keyword, setKeyword } = useContext(GeneralContext);
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <StyledHeader>
      <StyledRowContainer>
        <BiMenu />
        <SearchBar setKeyword={setKeyword} keyword={keyword} />
      </StyledRowContainer>
      <StyledRowContainer>
        <ToggleSwitch functionality={toggleTheme} />
        <p>Dark Mode</p>
        <StyledUserIcon>
          <img alt="user" src="default_user.webp" />
        </StyledUserIcon>
      </StyledRowContainer>
    </StyledHeader>
  );
}

export default HeaderBar;
