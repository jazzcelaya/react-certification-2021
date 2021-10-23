import React from 'react';
import StyledHeader from '../../styled/Header.styled';

function HeaderBar() {
  return (
    <StyledHeader>
      <div className="row">
        <div>=</div>
        <input type="text" placeholder="wizeline" className="searchbar" />
      </div>
      <div className="row">
        <label htmlFor="testid" className="switch" id="darkmode-switch">
          <input id="testid" type="checkbox" />
          <span className="slider round" />
        </label>

        <div className="user-icon" />
      </div>
    </StyledHeader>
  );
}

export default HeaderBar;
