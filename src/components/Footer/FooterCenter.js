import React from 'react';
import styled from 'styled-components';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';

const Wrapper = styled.div`
  flex: 0.4;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 300px;
  margin: 0 auto;
`;

const StyledShuffleIcon = styled(ShuffleIcon)`
  color: ${(props) => props.theme.colors.primary};
`;

const StyledRepeatIcon = styled(RepeatIcon)`
  color: ${(props) => props.theme.colors.primary};
`;

const FooterCenter = () => {
  return (
    <Wrapper>
      <StyledShuffleIcon />
      <SkipPreviousIcon />
      <PlayCircleOutlineIcon fontSize='large' />
      <SkipNextIcon />
      <StyledRepeatIcon />
    </Wrapper>
  );
};

export default FooterCenter;
