import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/styles.css';
import GlobalStyle from './styles/global-style';
import { ThemeProvider } from 'styled-components';
import {theme} from './styles/theme';

import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store/modules/reducers/index';
import rootSaga from './store/modules/sagas/index';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)),);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <ThemeProvider theme = {theme}>
      <Provider store = {store}>
        <GlobalStyle/>
          <App />
          </Provider>
    </ThemeProvider>,
  document.getElementById('root')
);