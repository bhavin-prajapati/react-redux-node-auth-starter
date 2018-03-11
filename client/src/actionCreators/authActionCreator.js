import * as auth from '../actions/auth';

export const login = (username, password) => {
  console.log('username', username);
  console.log('password', password);
  return (dispatch) => {
    dispatch(auth.login());

    // Login call is made here and success after 2 seconds
    setTimeout(() => {
      dispatch(auth.loginSuccess());
    }, 2000);
  };
};

export const loginFailed = () => {
  return (dispatch) => {
    dispatch(auth.loginFailed());
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(auth.logout());

    // Logout call is made here and success after 2 seconds
    setTimeout(() => {
      dispatch(auth.logoutSuccess());
    }, 2000);
  };
};

export const logoutFailed = () => {
  return (dispatch) => {
    dispatch(auth.logoutFailed());
  };
};

export const register = (username, email, password) => {
  console.log('username', username);
  console.log('email', email);
  console.log('password', password);
  return (dispatch) => {
    dispatch(auth.register());
  };
};
