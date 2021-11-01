import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { StyledSearchBar } from '../../styled/Header.styled';

const SearchBar = ({ keyword, setKeyword }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };
  return (
    <StyledSearchBar>
      <BiSearch />
      <input
        type="text"
        placeholder={keyword}
        id="header-search"
        onChange={(e) => handleChange(e)}
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
