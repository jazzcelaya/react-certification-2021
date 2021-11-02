import React, { useLayoutEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../GlobalStyles';
import { lightTheme, darkTheme } from '../Themes';

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
import { getDeviceTheme } from '../../utils/getDeviceTheme';

function App() {
  const [keyword, setKeyword] = useState('wizeline');
  const devicetheme = getDeviceTheme();
  const [theme, setTheme] = useState(devicetheme || 'light');

  console.log({ theme, devicetheme });

  const toogleTheme = () => {
    // eslint-disable-next-line no-unused-expressions
    theme === 'light' ? setTheme('dark') : setTheme('light');
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

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        <Header setKeyword={setKeyword} keyword={keyword} toogleTheme={toogleTheme} />
        <BrowserRouter>
          <AuthProvider>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <Cards keyword={keyword} />
                </Route>
                <Private exact path="/secret">
                  <SecretPage />
                </Private>
                <Route path="/:videoId">
                  <VideoDetails keyword={keyword} />
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
      </div>
    </ThemeProvider>
  );
}

export default App;
