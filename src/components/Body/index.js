import React from 'react';
import styled from 'styled-components';
import { useDataLayerValue } from '../../context/DataLayer';
import { discoverWeeklyPlaylistId } from '../../constants';
import Header from '../Header';
import BodyInfo from './BodyInfo';
import SongsList from '../SongsList';

const Content = styled.main`
  flex: 08;
  height: 100vh;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.gradient.purple};
  padding: ${(props) => props.theme.spacing.space06};
  overflow-y: overlay;

  body::-webkit-scrollbar {
    display: none;
  }
`;

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  const playPlaylist = () => {
    spotify
      .play({
        context_uri: `spotify:playlist:${discoverWeeklyPlaylistId}`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: 'SET_ITEM',
            item: r.item,
          });
          dispatch({
            type: 'SET_PLAYING',
            playing: true,
          });
        });
      })
      .catch((err) => {
        alert(`Please make sure you've a current active device playing.`);
      });
  };

  const pausePlaylist = (id) => {
    spotify
      .pause({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: 'SET_ITEM',
            item: r.item,
          });
          dispatch({
            type: 'SET_PLAYING',
            playing: false,
          });
        });
      })
      .catch((err) => {
        alert(`Please make sure you've a current active device playing.`);
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: 'SET_ITEM',
            item: r.item,
          });
          dispatch({
            type: 'SET_PLAYING',
            playing: true,
          });
        });
      })
      .catch((err) => {
        alert(`Please make sure you've a current active device playing.`);
      });
  };

  const pauseSong = (id) => {
    spotify
      .pause({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: 'SET_ITEM',
            item: r.item,
          });
          dispatch({
            type: 'SET_PLAYING',
            playing: false,
          });
        });
      })
      .catch((err) => {
        alert(`Please make sure you've a current active device playing.`);
      });
  };

  return (
    <Content>
      <Header spotify={spotify} />
      <BodyInfo data={discover_weekly} />
      <SongsList
        data={discover_weekly}
        actions={{ playPlaylist, pausePlaylist, playSong, pauseSong }}
      />
    </Content>
  );
};

export default Body;
