import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers'
import logger from 'redux-logger'

let store = createStore(allReducers, applyMiddleware(logger));
window.store = store;
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root'));
