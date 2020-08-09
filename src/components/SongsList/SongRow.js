import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-right: ${(props) => props.theme.spacing.space06};
  padding: ${(props) => props.theme.spacing.space06};
  display: flex;
  align-items: center;
  z-index: 100;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.black};
    opacity: 0.8;
  }

  img {
    height: ${(props) => props.theme.spacing.space07};
    width: ${(props) => props.theme.spacing.space07};
    margin-right: ${(props) => props.theme.spacing.space05};
  }

  h1 {
    font-size: ${(props) => props.theme.spacing.space05};
    margin: 0;
  }

  p {
    font-size: ${(props) => props.theme.spacing.space04};
    margin: ${(props) => props.theme.spacing.space02} 0 0 0;
    color: ${(props) => props.theme.colors.lightGrey};
  }
  .dot {
    margin: 0 ${(props) => props.theme.spacing.space02};
  }
`;

const SongRow = ({ track }) => {
  return (
    <Wrapper>
      <img src={track.album.images[0].url} alt='song name' />
      <div>
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(', ')}
          <span className='dot'>•</span>
          <span>{track.album.name}</span>
        </p>
      </div>
    </Wrapper>
  );
};

SongRow.propTyps = {
  track: PropTypes.object,
};

export default SongRow;
