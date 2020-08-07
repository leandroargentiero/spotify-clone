// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/
// 1. Click login button
// 2. Redirect to spotify login page
// 3. Redirect to homepage of the app once logged in

export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/';
const clientId = 'cac02b0ac1f941178cb897a37d62d813';

// user permissions
const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
  'playlist-read-private',
];

// get accesstoken from response url
export const getTokenFromUrl = () =>
  window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;
