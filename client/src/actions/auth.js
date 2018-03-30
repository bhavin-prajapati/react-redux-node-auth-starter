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

export const register = () => {
  return { type: REGISTER };
};

export const registerSuccess = (message) => {
  return { type: REGISTER_SUCCESS, data: message };
};

export const registerFailed = (error) => {
  return { type: REGISTER_FAIL, data: error };
};

export const login = () => {
  return { type: LOG_IN };
};

export const loginSuccess = (message, username) => {
  return { type: LOG_IN_SUCCESS, data: message, username };
};

export const loginFailed = (error) => {
  return { type: LOG_IN_FAIL, data: error };
};

export const getUser = () => {
  return { type: GET_USER };
};

export const getUserSuccess = (message) => {
  return { type: GET_USER_SUCCESS, data: message };
};

export const getUserFailed = (error) => {
  return { type: GET_USER_FAIL, data: error };
};

export const logout = () => {
  return { type: LOG_OUT };
};

export const logoutSuccess = (message) => {
  return { type: LOG_OUT_SUCCESS, data: message };
};

export const logoutFailed = (error) => {
  return { type: LOG_OUT_FAIL, data: error };
};

export const clearNotification = () => {
  return { type: CLEAR_NOTIFICATION };
};

