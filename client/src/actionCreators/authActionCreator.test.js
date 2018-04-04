import * as authActionCreator from './authActionCreator';
import * as auth from '../actions/auth';

global.fetch = require('jest-fetch-mock');

describe('AuthActionCreator', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
  });

  describe('Register action success', () => {
    let registerSuccessResponse;

    beforeEach(() => {
      registerSuccessResponse = { status: '200' };
      fetch.mockResponse(JSON.stringify(registerSuccessResponse));
      authActionCreator.register('username', 'email', 'password')(dispatch);
    });

    it('Should dispatch the REGISTER_SUCCESS action', () => {
      expect(dispatch.mock.calls).toHaveLength(1);
      expect(dispatch).toBeCalledWith(auth.register());
      // expect(dispatch).toBeCalledWith(auth.registerSuccess(registerSuccessResponse));
    });
  });

  describe('Register action error', () => {

  });
});
