import React from 'react';
import styled from 'styled-components';

import SearchIcon from '@material-ui/icons/Search';

const Wrapper = styled.div`
  flex: 0.5;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.lightGrey};
  border-radius: ${(props) => props.theme.spacing.space07};
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing.space04};

  input {
    border: none;
    width: 100%;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  color: ${(props) => props.theme.colors.primary};
`;

const HeaderLeft = () => {
  return (
    <Wrapper>
      <SearchIcon />
      <input type='text' placeholder='Search for Artists, Songs or Playlists' />
    </Wrapper>
  );
};

export default HeaderLeft;
