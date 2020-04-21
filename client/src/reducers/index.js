// all reducers will be here

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
});
