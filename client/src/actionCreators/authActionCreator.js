import api from '../utils/api';
import * as auth from '../actions/auth';

export const register = (username, email, password) => {
  return (dispatch) => {
    dispatch(auth.register());
    api.register(username, email, password)
      .then((response) => {
        if (response.error) {
          dispatch(auth.registerFailed(response.error));
        } else {
          dispatch(auth.registerSuccess(response.message));
        }
      });
  };
};

export const login = (username, password) => {
  return (dispatch) => {
    dispatch(auth.login(username, password));
    api.login(username, password)
      .then((response) => {
        if (response.error) {
          dispatch(auth.loginFailed(response.error));
        } else {
          dispatch(auth.loginSuccess(response.message, username));
        }
      });
  };
};

export const getUser = () => {
  return (dispatch) => {
    dispatch(auth.getUser());
    api.getUser()
      .then((response) => {
        if (response.error) {
          dispatch(auth.getUserFailed(response.error));
        } else {
          dispatch(auth.getUserSuccess(response));
        }
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(auth.logout());
    api.logout()
      .then((response) => {
        if (response.error) {
          dispatch(auth.logoutFailed(response.error));
        } else {
          dispatch(auth.logoutSuccess(response.message));
        }
      });
  };
};

export const clearNotification = () => {
  return (dispatch) => {
    dispatch(auth.clearNotification());
  };
};
