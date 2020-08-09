import React from 'react';
import styled from 'styled-components';

import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

const Wrapper = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  max-width: 300px;

  * .MuiSlider-root {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const FooterRight = () => {
  return (
    <Wrapper>
      <Grid container spacing={2}>
        <Grid item>
          <PlaylistPlayIcon />
        </Grid>
        <Grid item>
          <VolumeDownIcon />
        </Grid>
        <Grid item xs>
          <Slider />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default FooterRight;
