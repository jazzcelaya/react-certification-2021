import React from 'react';

const GeneralContext = React.createContext({
  favourites: {},
  setFavourites: () => {},
});

export default GeneralContext;
