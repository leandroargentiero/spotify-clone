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
      // store token in datalayer context
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      // connect app with spotify web api
      spotify.setAccessToken(_token);

      // get user data from spotify app and store in datalayer context
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      // get playlist data and store in datalayer context
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      // get discover weekly playlist and store in datalyer context
      spotify.getPlaylist('37i9dQZEVXcC4VfCkMX0zQ').then((playlist) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: playlist,
        });
      });
    }

    console.log(`I HAVE A TOKEN 🚀`, token);
  }, []);

  console.log('👨‍💻', user);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {token ? <Player spotify={spotify} /> : <Login />}
    </ThemeProvider>
  );
}

export default App;
