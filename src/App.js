import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './theme';
import { getTokenFromUrl } from './config/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './context/DataLayer';

import Login from './components/Login';
import Player from './components/Player';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      // store token in datalayer
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      // connect app with spotify web api
      spotify.setAccessToken(_token);

      // get user data from spotify app and store in datalayer
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      // get playlist data and store in datalayer
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });
    }

    console.log(`I HAVE A TOKEN 🚀`, token);
  }, []);

  console.log('👨‍💻', user);
  console.log('🔴', theme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {token ? <Player spotify={spotify} /> : <Login />}
    </ThemeProvider>
  );
}

export default App;
