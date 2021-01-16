import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import App from './App';
import GlobalStyle from './styles/global-style';
import { ThemeProvider } from 'styled-components';
import {theme} from './styles/theme';

ReactDOM.render(
  <ThemeProvider theme = {theme}>
    <GlobalStyle/>
      <App />
  </ThemeProvider>,
  document.getElementById('root')
);