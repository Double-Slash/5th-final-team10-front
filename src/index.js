import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/styles.css'
import App from './App';
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import Reducer from './_reducers/index'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)
//Store에서 객체 뿐만 아니라 promise, function도 받을 수 있게

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
