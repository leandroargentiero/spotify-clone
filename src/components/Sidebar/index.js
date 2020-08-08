import React from 'react';
import styled from 'styled-components';
import { useDataLayerValue } from '../../context/DataLayer';

import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

const SidebarWrapper = styled.aside`
  height: 100vh;
  flex: 0.2;
  color: ${(props) => props.theme.colors.white};
  min-width: 232px;
  background-color: ${(props) => props.theme.colors.darkGrey};
  padding: 0 ${(props) => props.theme.spacing.space05};
`;

const Seperator = styled.hr`
  border: 1px solid ${(props) => props.theme.colors.grey};
  width: 100%;
`;

const SidebarTitle = styled.p`
  margin: ${(props) => props.theme.spacing.space07} 0 0 0;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
`;

const SidebarLogo = styled.img`
  object-fit: contain;
  width: 80%;
  margin: ${(props) => props.theme.spacing.space05} 0;
`;

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <SidebarWrapper>
      <SidebarLogo
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt='Logo'
      />
      <SidebarOption title='Home' Icon={HomeIcon} />
      <SidebarOption title='Search' Icon={SearchIcon} />
      <SidebarOption title='Your Library' Icon={LibraryMusicIcon} />

      <SidebarTitle>Playlists</SidebarTitle>

      <Seperator />

      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;
