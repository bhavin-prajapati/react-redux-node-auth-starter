// Action Types
export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAIL = 'LOG_IN_FAIL';
export const LOG_OUT = 'LOG_OUT';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAIL = 'LOG_OUT_FAIL';

// API
export const BASE_URL = process.env.BASE_URL || 'http://localhost:8080';
export const REGISTER_ENDPOINT = '/auth/register';
export const SIGNIN_ENDPOINT = '/auth/signin';

