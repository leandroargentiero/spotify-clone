import React from 'react';
import styled from 'styled-components';
import { useDataLayerValue } from '../../context/DataLayer';
import { Avatar } from '@material-ui/core';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const UserName = styled.h4`
  margin: 0 0 0 ${(props) => props.theme.spacing.space03};
`;

const HeaderRight = () => {
  const [{ user }, dispatch] = useDataLayerValue();
  console.log('👀', user);
  return (
    <Wrapper>
      <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
      <UserName>{user?.display_name}</UserName>
    </Wrapper>
  );
};

export default HeaderRight;
