import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;

  img {
    height: 20vw;
    max-height: 232px;
    display: block;
    margin: 0 ${(props) => props.theme.spacing.space05} 0 0;
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`;

const InfoText = styled.div`
  flex: 1;
`;

const Overhead = styled.h3`
  font-size: ${(props) => props.theme.spacing.space04};
  margin: 0;
  font-weight: 700;
  text-transform: uppercase;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.spacing.space11};
  margin: 0 0 ${(props) => props.theme.spacing.space04};
  letter-spacing: -2px;
`;

const Description = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.spacing.space04};
`;

const BodyInfo = ({ data }) => {
  return (
    <Wrapper>
      <img src={data?.images[0].url} alt='' />
      <InfoText>
        <Overhead>Playlist</Overhead>
        <Title>Discover Weekly</Title>
        <Description>{data?.description}</Description>
      </InfoText>
    </Wrapper>
  );
};

BodyInfo.propTypes = {
  data: PropTypes.object,
};

export default BodyInfo;
