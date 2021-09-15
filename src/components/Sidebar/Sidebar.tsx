import styled from 'styled-components';
import React from 'react';

import UserInfo from './components/UserInfo';
import MenuItem from './components/MenuItem';

const SidebarContainer = styled.div`
  max-height: 100vh;
  height: 100%;
  width: 24rem;
  background-color: #313541;
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <UserInfo />
      <MenuItem title="Dashboard" icon="home" link="/dashboard" />
      <MenuItem title="Case Note" icon="clipboard-list" link="/casenote" />
      <MenuItem title="Clients" icon="user-friends" link="/clients" />
    </SidebarContainer>
  );
};

export default Sidebar;
