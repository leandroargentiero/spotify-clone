import React from 'react';
import styled from 'styled-components';

import Sidebar from '../Sidebar';
import Body from '../Body';
import Footer from '../Footer';

const Container = styled.div`
  display: flex;
`;

const Player = ({ spotify }) => {
  return (
    <>
      <Container>
        <Sidebar />
        <Body />
      </Container>
      <Footer />
    </>
  );
};

export default Player;
