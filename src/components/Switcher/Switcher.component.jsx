import React from 'react';
import './style.css';

const Switcher = ({ toogleTheme }) => {
  return (
    <label className="switch" htmlFor="myToggle">
      <input
        onClick={toogleTheme}
        className="switch__input"
        name=""
        type="checkbox"
        id="myToggle"
      />
      <div className="switch__fill" />
    </label>
  );
};

export default Switcher;
