import fetch from 'node-fetch';
import qs from 'qs';
import * as auth from '../actions/auth';
import { BASE_URL, REGISTER_ENDPOINT, SIGNIN_ENDPOINT, LOGOUT_ENDPOINT } from '../utils/constants';

export const register = (username, email, password) => {
  return (dispatch) => {
    dispatch(auth.register());

    // Register call
    const options = {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: qs.stringify({
        username: username,
        email: email,
        password: password
      })
    };
    fetch(BASE_URL + REGISTER_ENDPOINT, options)
      .then(res => res.json())
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

    // Login call
    const options = {
      method: 'post',
      credentials: 'include', // Don't forget to specify this if you need cookies
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: qs.stringify({
        username: username,
        password: password
      })
    };
    fetch(BASE_URL + SIGNIN_ENDPOINT, options)
      .then(res => res.json())
      .then((response) => {
        if (response.error) {
          dispatch(auth.loginFailed(response.error));
        } else {
          dispatch(auth.loginSuccess(response.message));
        }
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(auth.logout());

    // Logout call
    fetch(BASE_URL + LOGOUT_ENDPOINT)
      .then(res => res.json())
      .then((response) => {
        if (response.error) {
          dispatch(auth.logoutFailed(response.error));
        } else {
          dispatch(auth.logoutSuccess(response.message));
        }
      });
  };
};

export const logoutFailed = () => {
  return (dispatch) => {
    dispatch(auth.logoutFailed());
  };
};
