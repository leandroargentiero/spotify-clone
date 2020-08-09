import React from 'react';
import styled from 'styled-components';
import { useDataLayerValue } from '../../context/DataLayer';
import Header from '../Header';
import BodyInfo from './BodyInfo';
import SongsList from '../SongsList';

const Content = styled.main`
  flex: 08;
  height: 100vh;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.gradient.purple};
  padding: ${(props) => props.theme.spacing.space06};
  overflow-y: overlay;

  body::-webkit-scrollbar {
    display: none;
  }
`;

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <Content>
      <Header spotify={spotify} />
      <BodyInfo data={discover_weekly} />
      <SongsList data={discover_weekly} />
    </Content>
  );
};

export default Body;
