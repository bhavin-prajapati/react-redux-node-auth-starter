import { REGISTER, LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAIL, LOG_OUT, LOG_OUT_SUCCESS, LOG_OUT_FAIL } from '../utils/constants';

export default (state = Object.assign({}), action) => {
  switch (action.type) {
    case (REGISTER):
      console.log(action.data);
      return Object.assign({}, state, { pageStatus: 'register', prevPageStatus: state.pageStatus });
    case (LOG_IN):
      return Object.assign({}, state, { pageStatus: 'logging_in', prevPageStatus: state.pageStatus });
    case (LOG_IN_SUCCESS):
      return Object.assign({}, state, { pageStatus: 'login_success', prevPageStatus: state.pageStatus });
    case (LOG_IN_FAIL):
      return Object.assign({}, state, { pageStatus: 'login_failed', prevPageStatus: state.pageStatus });
    case (LOG_OUT):
      return Object.assign({}, state, { pageStatus: 'logging_out', prevPageStatus: state.pageStatus });
    case (LOG_OUT_SUCCESS):
      return Object.assign({}, state, { pageStatus: 'logout_success', prevPageStatus: state.pageStatus });
    case (LOG_OUT_FAIL):
      return Object.assign({}, state, { pageStatus: 'logout_failed', prevPageStatus: state.pageStatus });
    default:
      return state;
  }
};
