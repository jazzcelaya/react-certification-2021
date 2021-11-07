import React from 'react';

const GeneralContext = React.createContext({
  keyword: '',
  setKeyword: () => {},
  favorites: [],
});

export default GeneralContext;
