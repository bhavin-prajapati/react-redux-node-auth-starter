import qs from 'qs';
import { BASE_URL, REGISTER_ENDPOINT, SIGNIN_ENDPOINT, USER_ENDPOINT, LOGOUT_ENDPOINT, DASHBOARD_ENDPOINT } from './constants';

const register = (username, email, password) => {
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

  return fetch(BASE_URL + REGISTER_ENDPOINT, options)
    .then(res => res.json());
};

const login = (username, password) => {
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
  return fetch(BASE_URL + SIGNIN_ENDPOINT, options)
    .then(res => res.json());
};

const getUser = () => {
  const options = {
    method: 'get',
    credentials: 'include' // Don't forget to specify this if you need cookies
  };
  return fetch(BASE_URL + USER_ENDPOINT, options)
    .then(res => res.json());
};

const logout = () => {
  const options = {
    method: 'get',
    credentials: 'include' // Don't forget to specify this if you need cookies
  };
  return fetch(BASE_URL + LOGOUT_ENDPOINT, options)
    .then(res => res.json());
};

const loadDashboard = () => {
  const options = {
    method: 'get',
    credentials: 'include' // Don't forget to specify this if you need cookies
  };
  return fetch(BASE_URL + DASHBOARD_ENDPOINT, options)
    .then(res => res.json());
};

export default {
  register, login, getUser, logout, loadDashboard
};
