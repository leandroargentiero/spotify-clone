import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDataLayerValue } from '../../context/DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

const Wrapper = styled.div``;
const IconWrapper = styled.div`
  padding: ${(props) => props.theme.spacing.space06};
  display: flex;
  align-items: center;

  .MuiSvgIcon-root {
    margin-right: ${(props) => props.theme.spacing.space05};
  }

  .ic_play,
  .ic_pause {
    font-size: ${(props) => props.theme.spacing.space10};
    transition: ${(props) => props.theme.animation} transform ease-in;
    color: ${(props) => props.theme.colors.primary};

    &:hover {
      transform: scale(1.08);
    }
  }
`;

const SongsList = ({ data, actions }) => {
  const [{ playing }, dispatch] = useDataLayerValue();
  return (
    <Wrapper>
      <IconWrapper>
        {playing ? (
          <PauseCircleFilledIcon
            className='ic_pause'
            onClick={actions.pausePlaylist}
          />
        ) : (
          <PlayCircleFilledIcon
            className='ic_play'
            onClick={actions.playPlaylist}
          />
        )}

        <FavoriteIcon fontSize='large' />
        <MoreHorizIcon />
      </IconWrapper>

      {data?.tracks.items.map((item) => (
        <SongRow
          track={item.track}
          playSong={actions.playSong}
          pauseSong={actions.pauseSong}
          isPlaying={playing}
        />
      ))}
    </Wrapper>
  );
};

SongsList.propTypes = {
  data: PropTypes.object,
};

export default SongsList;
