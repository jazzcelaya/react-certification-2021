import React, { useLayoutEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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

function App() {
  const [keyword, setKeyword] = useState('wizeline');

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
    <div>
      <GeneralContext.Provider value={{ keyword, setKeyword }}>
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
      </GeneralContext.Provider>
    </div>
  );
}

export default App;
