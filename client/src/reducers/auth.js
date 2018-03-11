import { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL, LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAIL, LOG_OUT, LOG_OUT_SUCCESS, LOG_OUT_FAIL } from '../utils/constants';

export default (state = Object.assign({}), action) => {
  switch (action.type) {
    case (REGISTER):
      return Object.assign({}, state, { pageStatus: REGISTER, prevPageStatus: state.pageStatus });
    case (REGISTER_SUCCESS):
      return Object.assign({}, state, { pageStatus: REGISTER_SUCCESS, message: action.data, prevPageStatus: state.pageStatus });
    case (REGISTER_FAIL):
      return Object.assign({}, state, { pageStatus: REGISTER_FAIL, message: action.data, prevPageStatus: state.pageStatus });
    case (LOG_IN):
      return Object.assign({}, state, { pageStatus: LOG_IN, prevPageStatus: state.pageStatus });
    case (LOG_IN_SUCCESS):
      return Object.assign({}, state, { pageStatus: LOG_IN_SUCCESS, prevPageStatus: state.pageStatus });
    case (LOG_IN_FAIL):
      return Object.assign({}, state, { pageStatus: LOG_IN_FAIL, prevPageStatus: state.pageStatus });
    case (LOG_OUT):
      return Object.assign({}, state, { pageStatus: LOG_OUT, prevPageStatus: state.pageStatus });
    case (LOG_OUT_SUCCESS):
      return Object.assign({}, state, { pageStatus: LOG_OUT_SUCCESS, prevPageStatus: state.pageStatus });
    case (LOG_OUT_FAIL):
      return Object.assign({}, state, { pageStatus: LOG_OUT_FAIL, prevPageStatus: state.pageStatus });
    default:
      return state;
  }
};
