import React from 'react';

const ThemeContext = React.createContext({
  defaultTheme: {
    isDark: false,
    color: 'black',
    backgroundColor: 'white',
    detailsColor: 'rgba(0, 0, 0, 0.54)',
    headerColor: '#1c5476',
  },
  darkTheme: {
    isDark: true,
    color: 'white',
    backgroundColor: '#303030',
    detailsColor: 'rgba(255, 255, 255, 0.7)',
    headerColor: '#556cd6;',
  },
});

export default ThemeContext;
