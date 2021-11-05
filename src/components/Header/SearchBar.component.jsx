import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { StyledSearchBar } from '../../styled/Header.styled';

const SearchBar = ({ keyword, setKeyword }) => {
  const handleChange = (e) => {
    if (e.key === 'Enter') {
      setKeyword(e.target.value);
    }
  };

  return (
    <StyledSearchBar>
      <BiSearch />
      <input
        type="text"
        placeholder={keyword}
        id="header-search"
        onKeyPress={handleChange}
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
