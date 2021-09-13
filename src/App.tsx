import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Header from './components/Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #f4f7fe;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <Wrapper className="App">
      <Sidebar />
      <ContentWrapper>
        <Header />
        <Content />
      </ContentWrapper>
    </Wrapper>
  );
};

export default App;
