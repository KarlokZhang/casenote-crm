import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  html, body, #app {
    font-family: 'Roboto', sans-serif;
    height: 100%;
    width: 100%;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
