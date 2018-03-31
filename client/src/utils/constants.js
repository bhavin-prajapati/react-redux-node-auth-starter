// Action Types
export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAIL = 'LOG_IN_FAIL';
export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';
export const LOAD_DASHBOARD = 'LOAD_DASHBOARD';
export const LOAD_DASHBOARD_SUCCESS = 'LOAD_DASHBOARD_SUCCESS';
export const LOAD_DASHBOARD_FAIL = 'LOAD_DASHBOARD_FAIL';
export const LOG_OUT = 'LOG_OUT';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAIL = 'LOG_OUT_FAIL';
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';

// API
export const BASE_URL = process.env.BASE_URL || 'http://localhost:8080';
export const REGISTER_ENDPOINT = '/auth/register';
export const SIGNIN_ENDPOINT = '/auth/signin';
export const USER_ENDPOINT = '/auth/user';
export const LOGOUT_ENDPOINT = '/auth/logout';
export const DASHBOARD_ENDPOINT = '/dashboard';
export const SESSION_COOKIE_NAME = '_sid';


