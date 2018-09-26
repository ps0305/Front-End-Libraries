import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import quoteReducer from './reducer';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const PREV_STATE = {
  error: '',
  loading: true,
  quote: {}
};

export default createStore(quoteReducer, PREV_STATE, composeEnhancers(applyMiddleware(thunk)));