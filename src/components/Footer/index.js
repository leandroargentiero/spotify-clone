import React from 'react';
import styled from 'styled-components';
import FooterLeft from './FooterLeft';
import FooterCenter from './FooterCenter';
import FooterRight from './FooterRight';

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  height: 91px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.grey};
  padding: ${(props) => props.theme.spacing.space06};
  display: flex;
  justify-content: space-between;

  .MuiSvgIcon-root:hover {
    transition: transform ${(props) => props.theme.animation} ease-in-out;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLeft />
      <FooterCenter />
      <FooterRight />
    </FooterWrapper>
  );
};

export default Footer;
