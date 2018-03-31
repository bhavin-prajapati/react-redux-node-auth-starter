import {
  LOAD_DASHBOARD,
  LOAD_DASHBOARD_SUCCESS,
  LOAD_DASHBOARD_FAIL
} from '../utils/constants';

export default (state = Object.assign({}), action) => {
  switch (action.type) {
    case (LOAD_DASHBOARD):
      return Object.assign({}, state, {
        message: null,
        error: null
      });
    case (LOAD_DASHBOARD_SUCCESS):
      return Object.assign({}, state, {
        message: null,
        dashboard: action.data,
        error: null
      });
    case (LOAD_DASHBOARD_FAIL):
      return Object.assign({}, state, {
        message: null,
        error: action.data
      });
    default:
      return state;
  }
};
