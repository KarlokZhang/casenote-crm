import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
`;

const Content: React.FC = () => {
  return (
    <Container>
      <div>React app</div>
    </Container>
  );
};

export default Content;
