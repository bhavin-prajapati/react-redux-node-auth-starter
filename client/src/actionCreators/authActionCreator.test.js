import fetch from 'jest-fetch-mock';
import * as authActionCreator from './authActionCreator';
import * as auth from '../actions/auth';

global.fetch = fetch;

describe('AuthActionCreator', () => {
  let dispatch;

  describe('Register', () => {
    beforeEach(() => {
      dispatch = jest.fn();
      fetch.resetMocks();
    });

    describe('action success', () => {
      let registerSuccessResponse;

      beforeEach(() => {
        registerSuccessResponse = { message: '200' };
        fetch.mockResponse(JSON.stringify(registerSuccessResponse));
        authActionCreator.register('username', 'email', 'password')(dispatch);
      });

      it('Should dispatch the REGISTER_SUCCESS action', () => {
        expect(dispatch.mock.calls).toHaveLength(2);
        expect(dispatch).toBeCalledWith(auth.register());
        expect(dispatch).toBeCalledWith(auth.registerSuccess(registerSuccessResponse.message));
      });
    });

    describe('action failed', () => {
      let registerFailedResponse;

      beforeEach(() => {
        registerFailedResponse = { error: 'server error' };
        fetch.mockResponse(JSON.stringify(registerFailedResponse));
        authActionCreator.register('username', 'email', 'password')(dispatch);
      });

      it('Should dispatch the REGISTER_FAIL action', () => {
        expect(dispatch.mock.calls).toHaveLength(2);
        expect(dispatch).toBeCalledWith(auth.register());
        expect(dispatch).toBeCalledWith(auth.registerFailed(registerFailedResponse.error));
      });
    });
  });

  describe('Login', () => {
    beforeEach(() => {
      dispatch = jest.fn();
      fetch.resetMocks();
    });

    describe('action success', () => {
      let loginSuccessResponse;

      beforeEach(() => {
        loginSuccessResponse = { message: '200' };
        fetch.mockResponse(JSON.stringify(loginSuccessResponse));
        authActionCreator.login('username', 'email', 'password')(dispatch);
      });

      it('Should dispatch the LOGIN_SUCCESS action', () => {
        expect(dispatch.mock.calls).toHaveLength(2);
        expect(dispatch).toBeCalledWith(auth.login('username', 'password'));
        expect(dispatch).toBeCalledWith(auth.loginSuccess(loginSuccessResponse.message, 'username'));
      });
    });

    describe('action failed', () => {
      let loginFailedResponse;

      beforeEach(() => {
        loginFailedResponse = { error: 'server error' };
        fetch.mockResponse(JSON.stringify(loginFailedResponse));
        authActionCreator.login('username', 'email', 'password')(dispatch);
      });

      it('Should dispatch the LOGIN_FAIL action', () => {
        expect(dispatch.mock.calls).toHaveLength(2);
        expect(dispatch).toBeCalledWith(auth.login('username', 'password'));
        expect(dispatch).toBeCalledWith(auth.loginFailed(loginFailedResponse.error));
      });
    });
  });

  describe('Get User', () => {
    beforeEach(() => {
      dispatch = jest.fn();
      fetch.resetMocks();
    });

    describe('action success', () => {
      let getUserSuccessResponse;

      beforeEach(() => {
        getUserSuccessResponse = { message: '200' };
        fetch.mockResponse(JSON.stringify(getUserSuccessResponse));
        authActionCreator.getUser()(dispatch);
      });

      it('Should dispatch the GET_USER_SUCCESS action', () => {
        expect(dispatch.mock.calls).toHaveLength(2);
        expect(dispatch).toBeCalledWith(auth.getUser());
        expect(dispatch).toBeCalledWith(auth.getUserSuccess(getUserSuccessResponse));
      });
    });

    describe('action failed', () => {
      let getUserFailedResponse;

      beforeEach(() => {
        getUserFailedResponse = { error: 'server error' };
        fetch.mockResponse(JSON.stringify(getUserFailedResponse));
        authActionCreator.getUser()(dispatch);
      });

      it('Should dispatch the GET_USER_FAIL action', () => {
        expect(dispatch.mock.calls).toHaveLength(2);
        expect(dispatch).toBeCalledWith(auth.getUser());
        expect(dispatch).toBeCalledWith(auth.getUserFailed(getUserFailedResponse.error));
      });
    });
  });

  describe('Logout', () => {
    beforeEach(() => {
      dispatch = jest.fn();
      fetch.resetMocks();
    });

    describe('action success', () => {
      let logoutSuccessResponse;

      beforeEach(() => {
        logoutSuccessResponse = { message: '200' };
        fetch.mockResponse(JSON.stringify(logoutSuccessResponse));
        authActionCreator.logout()(dispatch);
      });

      it('Should dispatch the LOGOUT_SUCCESS action', () => {
        expect(dispatch.mock.calls).toHaveLength(2);
        expect(dispatch).toBeCalledWith(auth.logout());
        expect(dispatch).toBeCalledWith(auth.logoutSuccess(logoutSuccessResponse.message));
      });
    });

    describe('action failed', () => {
      let logoutFailedResponse;

      beforeEach(() => {
        logoutFailedResponse = { error: 'server error' };
        fetch.mockResponse(JSON.stringify(logoutFailedResponse));
        authActionCreator.logout()(dispatch);
      });

      it('Should dispatch the LOGOUT_FAIL action', () => {
        expect(dispatch.mock.calls).toHaveLength(2);
        expect(dispatch).toBeCalledWith(auth.logout());
        expect(dispatch).toBeCalledWith(auth.logoutFailed(logoutFailedResponse.error));
      });
    });
  });

  describe('Clear Notifications', () => {
    beforeEach(() => {
      dispatch = jest.fn();
    });

    describe('action success', () => {
      beforeEach(() => {
        authActionCreator.clearNotification()(dispatch);
      });

      it('Should dispatch the LOGOUT_SUCCESS action', () => {
        expect(dispatch.mock.calls).toHaveLength(1);
        expect(dispatch).toBeCalledWith(auth.clearNotification());
      });
    });
  });
});
