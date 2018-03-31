import { combineReducers } from 'redux';
import auth from './auth';
import dashboard from './dashboard';

export default combineReducers({
  auth,
  dashboard
});
