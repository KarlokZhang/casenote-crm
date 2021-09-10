import React, { ReactNode } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
`;

interface ContentProps {
  children: ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Content;
