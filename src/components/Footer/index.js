import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  height: 91px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.grey};
  padding: ${(props) => props.theme.spacing.space06};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <h1>I am the footer</h1>
    </FooterWrapper>
  );
};

export default Footer;
