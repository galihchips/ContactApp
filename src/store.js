import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import appReducer from './reducers/index'; //import app reducers dari index reducers

const middleware = applyMiddleware(thunk, promise());
const store = createStore(appReducer, middleware);

export default store;