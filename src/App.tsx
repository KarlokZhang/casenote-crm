import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 100vh;
  background-color: #f4f7fe;
`;

const App: React.FC = () => {
  return (
    <Wrapper className="App">
      <Sidebar />
      <div>react app after Deploy</div>
    </Wrapper>
  );
};

export default App;
