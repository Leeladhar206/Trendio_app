import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import authReducer from './Authentication/authReducer';
import productReducer from './productReducer/productReducer';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  authReducer,
  productReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


