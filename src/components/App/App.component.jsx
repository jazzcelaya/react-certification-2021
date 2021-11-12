import React, { useState, useEffect, useContext, useReducer } from 'react';
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
import FavouriteVideoDetails from '../FavouriteVideoDetails';
import Fortune from '../Fortune';
import Layout from '../Layout';
import GeneralContext from '../../state/GeneralContext';
import ThemeContext from '../../state/ThemeContext';

function reducer(favourites, action) {
  switch (action.type) {
    case 'setFavourites':
      return [...action.payload.favourites];
    case 'addFavourite':
      localStorage.setItem(
        'favourites',
        JSON.stringify([...favourites, action.payload.favourite])
      );
      return [...favourites, action.payload.favourite];
    case 'deleteFavourite': {
      const filteredFavourites = favourites.filter(
        (favourite) => favourite.videoId !== action.payload.id
      );
      localStorage.setItem('favourites', JSON.stringify(filteredFavourites));
      return filteredFavourites;
    }
    default:
      return favourites;
  }
}

function App() {
  const [keyword, setKeyword] = useState('wizeline');
  // const { setFavourites } = useContext(GeneralContext);
  const { darkTheme, defaultTheme } = useContext(ThemeContext);
  const [theme, setTheme] = useState(defaultTheme);
  const [favourites, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const favouritesArray = localStorage.getItem('favourites');
    if (favouritesArray) {
      dispatch({
        type: 'setFavourites',
        payload: { favourites: JSON.parse(favouritesArray) },
      });
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme.isDark ? defaultTheme : darkTheme;
    setTheme(newTheme);
  };

  const toggleFavourite = (video) => {
    if (favourites.some((object) => object.videoId === video.videoId)) {
      dispatch({ type: 'deleteFavourite', payload: { id: video.videoId } });
    } else {
      dispatch({ type: 'addFavourite', payload: { favourite: video } });
    }
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
                    <Private exact path="/favs">
                      <Favourites favourites={favourites} />
                    </Private>
                    <Private path="/favs/:videoId">
                      <FavouriteVideoDetails
                        toggleFavourite={toggleFavourite}
                        favourites={favourites}
                      />
                    </Private>
                    <Private exact path="/secret">
                      <SecretPage />
                    </Private>
                    <Route exact path="/login">
                      <LoginPage />
                    </Route>
                    <Route path="/:videoId">
                      <VideoDetails
                        toggleFavourite={toggleFavourite}
                        favourites={favourites}
                      />
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
