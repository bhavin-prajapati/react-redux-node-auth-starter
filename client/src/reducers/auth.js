import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAIL,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  LOG_OUT,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAIL,
  CLEAR_NOTIFICATION
} from '../utils/constants';

export default (state = Object.assign({}), action) => {
  switch (action.type) {
    case (REGISTER):
      return Object.assign({}, state, {
        pageStatus: REGISTER,
        message: null,
        error: null,
        prevPageStatus: state.pageStatus
      });
    case (REGISTER_SUCCESS):
      return Object.assign({}, state, {
        pageStatus: REGISTER_SUCCESS,
        message: action.data,
        error: null,
        prevPageStatus: state.pageStatus
      });
    case (REGISTER_FAIL):
      return Object.assign({}, state, {
        pageStatus: REGISTER_FAIL,
        message: null,
        error: action.data,
        prevPageStatus: state.pageStatus
      });
    case (LOG_IN):
      return Object.assign({}, state, {
        pageStatus: LOG_IN,
        message: null,
        error: null,
        prevPageStatus: state.pageStatus
      });
    case (LOG_IN_SUCCESS):
      return Object.assign({}, state, {
        pageStatus: LOG_IN_SUCCESS,
        message: action.data,
        error: null,
        prevPageStatus: state.pageStatus,
        username: action.username
      });
    case (LOG_IN_FAIL):
      return Object.assign({}, state, {
        pageStatus: LOG_IN_FAIL,
        message: null,
        error: action.data,
        prevPageStatus: state.pageStatus
      });
    case (GET_USER):
      return Object.assign({}, state, {
        pageStatus: GET_USER,
        message: null,
        error: null,
        prevPageStatus: state.pageStatus
      });
    case (GET_USER_SUCCESS):
      return Object.assign({}, state, {
        pageStatus: GET_USER,
        message: null,
        error: null,
        prevPageStatus: state.pageStatus,
        user: action.data
      });
    case (GET_USER_FAIL):
      return Object.assign({}, state, {
        pageStatus: GET_USER,
        message: null,
        error: action.data,
        prevPageStatus: state.pageStatus
      });
    case (LOG_OUT):
      return Object.assign({}, state, {
        pageStatus: LOG_OUT,
        message: null,
        error: null,
        prevPageStatus: state.pageStatus
      });
    case (LOG_OUT_SUCCESS):
      return Object.assign({}, state, {
        pageStatus: LOG_OUT_SUCCESS,
        message: action.data,
        user: null,
        error: null,
        prevPageStatus: state.pageStatus
      });
    case (LOG_OUT_FAIL):
      return Object.assign({}, state, {
        pageStatus: LOG_OUT_FAIL,
        message: null,
        error: action.data,
        prevPageStatus: state.pageStatus
      });
    case (CLEAR_NOTIFICATION):
      return Object.assign({}, state, {
        pageStatus: LOG_OUT_FAIL,
        message: null,
        error: null,
        prevPageStatus: state.pageStatus
      });
    default:
      return state;
  }
};
