import React, { useLayoutEffect, useState } from 'react';
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
import Fortune from '../Fortune';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import GeneralContext from '../../state/GeneralContext';
import ThemeContext from '../../state/ThemeContext';

function App() {
  const [keyword, setKeyword] = useState('wizeline');
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  const theme = {
    color: darkTheme ? 'white' : 'black',
    backgroundColor: darkTheme ? '#303030' : 'white',
    detailsColor: darkTheme ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.54)',
    headerColor: darkTheme ? '#556cd6;' : '#1c5476',
  };

  return (
    <div>
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme, toggleTheme }}>
        <GeneralContext.Provider value={{ keyword, setKeyword }}>
          <ThemeProvider theme={theme}>
            <Header />
            <BrowserRouter>
              <AuthProvider>
                <Layout>
                  <Switch>
                    <Route exact path="/">
                      <Cards />
                    </Route>
                    <Private exact path="/secret">
                      <SecretPage />
                    </Private>
                    <Route path="/:videoId">
                      <VideoDetails />
                    </Route>
                    <Route exact path="/login">
                      <LoginPage />
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
