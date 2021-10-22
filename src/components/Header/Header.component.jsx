import React from 'react';

import './Header.styles.css';

function Header() {
  return (
    <div className="searchbar-header">
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
    </div>
  );
}

export default Header;
