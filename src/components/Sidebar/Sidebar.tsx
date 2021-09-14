import styled from 'styled-components';
import React from 'react';

import MenuItem from './components/MenuItem';

const SidebarContainer = styled.div`
  max-height: 100vh;
  height: 100%;
  width: 18rem;
  background-color: rgb(49, 53, 65);
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </SidebarContainer>
  );
};

export default Sidebar;
