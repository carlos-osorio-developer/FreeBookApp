import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/reducer';

const reducer = combineReducers({
  books: booksReducer
  // add if you need more
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;