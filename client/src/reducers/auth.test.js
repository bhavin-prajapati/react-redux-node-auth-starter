import authReducer from './auth';
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

describe('Auth Reducer', () => {
  let result;

  it('REGISTER action', () => {
    const action = {
      type: REGISTER
    };

    result = authReducer({ pageStatus: '' }, action);
    expect(result).toEqual({
      error: null, message: null, pageStatus: 'REGISTER', prevPageStatus: ''
    });
  });

  it('REGISTER_SUCCESS action', () => {
    const action = {
      type: REGISTER_SUCCESS,
      data: 'success'
    };

    result = authReducer({ pageStatus: 'REGISTER' }, action);
    expect(result).toEqual({
      pageStatus: REGISTER_SUCCESS,
      message: 'success',
      error: null,
      prevPageStatus: 'REGISTER'
    });
  });

  it('REGISTER_FAIL action', () => {
    const action = {
      type: REGISTER_FAIL,
      data: 'failed'
    };

    result = authReducer({ pageStatus: 'REGISTER' }, action);
    expect(result).toEqual({
      pageStatus: REGISTER_FAIL,
      message: null,
      error: 'failed',
      prevPageStatus: 'REGISTER'
    });
  });

  it('LOG_IN action', () => {
    const action = {
      type: LOG_IN
    };

    result = authReducer({ pageStatus: '' }, action);
    expect(result).toEqual({
      error: null, message: null, pageStatus: 'LOG_IN', prevPageStatus: ''
    });
  });

  it('LOG_IN_SUCCESS action', () => {
    const action = {
      type: LOG_IN_SUCCESS,
      data: 'success'
    };

    result = authReducer({ pageStatus: 'LOG_IN' }, action);
    expect(result).toEqual({
      pageStatus: LOG_IN_SUCCESS,
      message: 'success',
      error: null,
      prevPageStatus: 'LOG_IN'
    });
  });

  it('LOG_IN_FAIL action', () => {
    const action = {
      type: LOG_IN_FAIL,
      data: 'failed'
    };

    result = authReducer({ pageStatus: 'LOG_IN' }, action);
    expect(result).toEqual({
      pageStatus: LOG_IN_FAIL,
      message: null,
      error: 'failed',
      prevPageStatus: 'LOG_IN'
    });
  });

  it('GET_USER action', () => {
    const action = {
      type: GET_USER
    };

    result = authReducer({ pageStatus: '' }, action);
    expect(result).toEqual({
      error: null, message: null, pageStatus: 'GET_USER', prevPageStatus: ''
    });
  });

  it('GET_USER_SUCCESS action', () => {
    const action = {
      type: GET_USER_SUCCESS,
      data: 'success'
    };

    result = authReducer({ pageStatus: 'GET_USER' }, action);
    expect(result).toEqual({
      error: null, message: null, pageStatus: 'GET_USER', prevPageStatus: 'GET_USER', user: 'success'
    });
  });

  it('GET_USER_FAIL action', () => {
    const action = {
      type: GET_USER_FAIL,
      data: 'failed'
    };

    result = authReducer({ pageStatus: 'GET_USER' }, action);
    expect(result).toEqual({
      error: 'failed', message: null, pageStatus: 'GET_USER', prevPageStatus: 'GET_USER'
    });
  });

  it('LOG_OUT action', () => {
    const action = {
      type: LOG_OUT
    };

    result = authReducer({ pageStatus: '' }, action);
    expect(result).toEqual({
      error: null, message: null, pageStatus: 'LOG_OUT', prevPageStatus: ''
    });
  });

  it('LOG_OUT_SUCCESS action', () => {
    const action = {
      type: LOG_OUT_SUCCESS,
      data: 'success'
    };

    result = authReducer({ pageStatus: 'LOG_OUT' }, action);
    expect(result).toEqual({
      error: null, message: 'success', pageStatus: 'LOG_OUT_SUCCESS', prevPageStatus: 'LOG_OUT', user: null
    });
  });

  it('LOG_OUT_FAIL action', () => {
    const action = {
      type: LOG_OUT_FAIL,
      data: 'failed'
    };

    result = authReducer({ pageStatus: 'LOG_OUT' }, action);
    expect(result).toEqual({
      pageStatus: LOG_OUT_FAIL,
      message: null,
      error: 'failed',
      prevPageStatus: 'LOG_OUT'
    });
  });

  it('CLEAR_NOTIFICATION action', () => {
    const action = {
      type: CLEAR_NOTIFICATION
    };

    result = authReducer({ pageStatus: 'CLEAR_NOTIFICATION' }, action);
    expect(result).toEqual({
      error: null, message: null, pageStatus: 'LOG_OUT_FAIL', prevPageStatus: 'CLEAR_NOTIFICATION'
    });
  });
});

