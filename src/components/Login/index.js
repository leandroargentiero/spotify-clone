import React from 'react';
import styled from 'styled-components';
import { loginUrl } from '../../config/spotify';

import Button from '../Button';

const LoginWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background: ${(props) => props.theme.colors.black};
`;

const Image = styled.img`
  width: 100%;
  max-width: 50%;
`;

function Login() {
  return (
    <LoginWrapper>
      <Image
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt='Spotify Logo'
      />
      <Button href={loginUrl}>Login with spotify</Button>
    </LoginWrapper>
  );
}

export default Login;
