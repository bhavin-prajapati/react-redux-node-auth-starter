import { REGISTER, LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAIL, LOG_OUT, LOG_OUT_SUCCESS, LOG_OUT_FAIL } from '../utils/constants';

export const register = () => {
  return { type: REGISTER };
};

export const login = () => {
  return { type: LOG_IN };
};

export const loginSuccess = () => {
  return { type: LOG_IN_SUCCESS };
};

export const loginFailed = () => {
  return { type: LOG_IN_FAIL };
};

export const logout = () => {
  return { type: LOG_OUT };
};

export const logoutSuccess = () => {
  return { type: LOG_OUT_SUCCESS };
};

export const logoutFailed = () => {
  return { type: LOG_OUT_FAIL };
};

