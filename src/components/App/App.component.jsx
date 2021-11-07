import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AuthProvider from '../../providers/Auth';
import VideoDetails from '../VideoDetails';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Header from '../Header';
import Cards from '../Cards';
import Private from '../Private';
import Favourites from '../Favourites';
import Fortune from '../Fortune';
import Layout from '../Layout';
import GeneralContext from '../../state/GeneralContext';
import ThemeContext from '../../state/ThemeContext';

/* function reducer(state, action) {
  switch (action.type) {
    case 'toggleTheme':
      if (!state.isDark) {
        return { theme: darkTheme, isDark: true };
      }
      return { theme: defaultTheme, isDark: false };
    case 'toggleFavourite':
      return state;
    default:
      return state;
  }
} */

function App() {
  const [keyword, setKeyword] = useState('wizeline');
  const { setFavourites } = useContext(GeneralContext);
  const { darkTheme, defaultTheme } = useContext(ThemeContext);
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const favouritesArray = localStorage.getItem('favourites');
    if (favouritesArray) {
      setFavourites(favouritesArray);
    }
  }, [setFavourites]);

  const toggleTheme = () => {
    const newTheme = theme.isDark ? defaultTheme : darkTheme;
    setTheme(newTheme);
  };

  return (
    <div>
      <ThemeContext.Provider value={{ toggleTheme }}>
        <GeneralContext.Provider value={{ keyword, setKeyword }}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <AuthProvider>
                <Header />
                <Layout>
                  <Switch>
                    <Route exact path="/">
                      <Cards />
                    </Route>
                    <Route exact path="/favs">
                      <Favourites />
                    </Route>
                    <Private exact path="/secret">
                      <SecretPage />
                    </Private>
                    <Route exact path="/login">
                      <LoginPage />
                    </Route>
                    <Route path="/:videoId">
                      <VideoDetails />
                    </Route>
                    <Route path="*">
                      <NotFound />
                    </Route>
                  </Switch>
                  <Fortune />
                </Layout>
              </AuthProvider>
            </BrowserRouter>
          </ThemeProvider>
        </GeneralContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
