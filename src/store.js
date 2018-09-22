import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import contactReducer from './reducers/contact';

const middleware = applyMiddleware(logger, thunk, promise());
const store = createStore(contactReducer, middleware);

export default store;