import React from 'react';
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
        <div>=</div>
        <StyledSearchBar type="text" placeholder="wizeline" />
      </StyledRowContainer>
      <StyledRowContainer>
        <StyledModeToogle htmlFor="darkmode-switch" id="darkmode-switch">
          <input id="darkmode-switch" type="checkbox" />
          <span className="slider round" />
        </StyledModeToogle>

        <StyledUserIcon />
      </StyledRowContainer>
    </StyledHeader>
  );
}

export default HeaderBar;
