import styled from 'styled-components';
import React from 'react';

const SidebarContainer = styled.div`
  max-height: 100vh;
  height: 100%;
  width: 18rem;
  background-color: red;
`;

const Sidebar: React.FC = () => {
  return <SidebarContainer />;
};

export default Sidebar;
