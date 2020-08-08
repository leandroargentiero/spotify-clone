import React from 'react';
import styled from 'styled-components';

const Content = styled.main`
  flex: 08;
  height: 100vh;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.gradient.purple};
  padding: ${(props) => props.theme.spacing.space06};
`;

const Body = () => {
  return (
    <Content>
      <h1>I am the body</h1>
    </Content>
  );
};

export default Body;
