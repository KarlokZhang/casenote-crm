import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const Content: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Content;
