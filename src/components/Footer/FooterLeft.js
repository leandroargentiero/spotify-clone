import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  max-width: 300px;
`;

const AlbumCover = styled.img`
  height: 60px;
  width: 60px;
  object-fit: contain;
  margin-right: ${(props) => props.theme.spacing.space04};
`;

const Title = styled.h4`
  font-size: ${(props) => {
    switch (props.songInfo) {
      case 'title':
        return '14px';
      case 'artist':
        return '12px';
      default:
        return '';
    }
  }};
  font-weight: ${(props) => (props.songInfo === 'artist' ? '300' : null)};
  color: ${(props) => props.theme.colors.white};
  margin: ${(props) => props.theme.spacing.space02} 0;
`;

const FooterRight = () => {
  return (
    <Wrapper>
      <AlbumCover
        src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.genius.com%2F9b5cf4c3021a56a390848e6eedbc4722.600x600x1.jpg&f=1&nofb=1'
        alt=''
      />
      <div>
        <Title songInfo='title'>Yeah!</Title>
        <Title songInfo='artist'>Usher</Title>
      </div>
    </Wrapper>
  );
};

export default FooterRight;
