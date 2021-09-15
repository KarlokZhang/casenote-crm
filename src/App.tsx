import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Header from './components/Header';

import CaseNotePage from './pages/CaseNotePage';
import DashboardPage from './pages/DashboardPage';
import ClientPage from './pages/ClientPage';

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
    <Router>
      <Wrapper className="App">
        <Sidebar />
        <ContentWrapper>
          <Header />
          <Switch>
            <Content>
              <Route exact path="/dashboard" component={DashboardPage} />
              <Route path="/casenote" component={CaseNotePage} />
              <Route path="/clients" component={ClientPage} />
            </Content>
          </Switch>
        </ContentWrapper>
      </Wrapper>
    </Router>
  );
};

export default App;
