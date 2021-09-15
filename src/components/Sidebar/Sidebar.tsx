import styled from 'styled-components';
import React from 'react';

import UserInfo from './components/UserInfo';
import MenuItem from './components/MenuItem';

import { SidebarConfig } from './SidebarConfig';

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

      {SidebarConfig.map((menuItem) => (
        <MenuItem
          title={menuItem.title}
          icon={menuItem.icon}
          link={menuItem.path}
        />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
