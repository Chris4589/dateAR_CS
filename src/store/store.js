
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/login';

// eslint-disable-next-line no-undef
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  auth:authReducer
});

export const store = createStore(
  reducers, 
  composeEnhancers(applyMiddleware(thunk))
);