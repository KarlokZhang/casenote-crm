import styled from 'styled-components';
import React, { useState } from 'react';

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
  const [select, setSelect] = useState<string>('');

  return (
    <SidebarContainer>
      <UserInfo />

      {SidebarConfig.map((menuItem) => (
        <MenuItem
          key={menuItem.title}
          title={menuItem.title}
          icon={menuItem.icon}
          path={menuItem.path}
          selected={select}
          onClick={() => setSelect(menuItem.path)}
        />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
