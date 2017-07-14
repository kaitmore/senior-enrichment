import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import { combineReducers } from 'redux';

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))
