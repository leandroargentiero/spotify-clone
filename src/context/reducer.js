export const initalState = {
  user: null,
  playlists: [],
  playing: false,
  discover_weekly: null,
  item: null,
  // For development purposes only, please disable when building for production.
  // token:
  //   'BQDYVt_AS4Kqi4LAiKBS6JEs0ZD7ILpEQCWV9TXQcty-d2LisP8ZYE-31EjlrY-DsSl1zjUH9836n33gxJ14YDuRAV3GRzsjyGwlimBTK2G6Je8ien1L9PgXNNAW6wIN3EHLTzAVKo7FqQXtAd5ASTqwImLfOBw',
};

const reducer = (state, action) => {
  // console.log(action);

  // Action -> type, [payload]
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      };
    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing,
      };
    default:
      return state;
  }
};

export default reducer;
