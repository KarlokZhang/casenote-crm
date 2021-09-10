import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #f4f7fe;
`;

const App: React.FC = () => {
  return (
    <Wrapper className="App">
      <Sidebar />
      <Content>
        <div>react app after Deploy</div>
      </Content>
    </Wrapper>
  );
};

export default App;
