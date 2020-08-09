import React from 'react';
import styled from 'styled-components';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.spacing.space07};
`;

const Header = () => {
  return (
    <Wrapper>
      <HeaderLeft />
      <HeaderRight />
    </Wrapper>
  );
};

export default Header;
