import React from 'react';

const GeneralContext = React.createContext({
  keyword: '',
  setKeyword: () => {},
});

export default GeneralContext;
