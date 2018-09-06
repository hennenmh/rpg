import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import logger from 'redux-logger';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(allReducers, persistedState, applyMiddleware(logger));

store.subscribe(() => {
  saveState({
    character: store.getState().character,
    enemy: store.getState().enemy,
    currentEnemy: store.getState().currentEnemy,
    items: store.getState().items,
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
