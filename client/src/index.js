import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import App from './App';
import rootReducer from './reducers'
import { selectUser, fetchBooks } from './actions/books'
import './index.css';

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


store.dispatch(selectUser('msfeldstein'))
store.dispatch(fetchBooks('msfeldstein')).then(() =>
  console.log(store.getState())
)
