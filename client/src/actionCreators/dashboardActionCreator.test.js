import fetch from 'jest-fetch-mock';
import * as dashboardActionCreator from './dashboardActionCreator';
import * as dashboard from '../actions/dashboard';

global.fetch = fetch;

describe('AuthActionCreator', () => {
  let dispatch;

  describe('Load Dashboard', () => {
    beforeEach(() => {
      dispatch = jest.fn();
      fetch.resetMocks();
    });

    describe('action success', () => {
      let loadDashboardSuccessResponse;

      beforeEach(() => {
        loadDashboardSuccessResponse = { message: '200' };
        fetch.mockResponse(JSON.stringify(loadDashboardSuccessResponse));
        dashboardActionCreator.loadDashboard()(dispatch);
      });

      it('Should dispatch the LOAD_DASHBOARD_SUCCESS action', () => {
        expect(dispatch.mock.calls).toHaveLength(2);
        expect(dispatch).toBeCalledWith(dashboard.loadDashboard());
        expect(dispatch).toBeCalledWith(dashboard.loadDashboardSuccess(loadDashboardSuccessResponse));
      });
    });

    describe('action failed', () => {
      let loadDashboardFailedResponse;

      beforeEach(() => {
        loadDashboardFailedResponse = { error: 'server error' };
        fetch.mockResponse(JSON.stringify(loadDashboardFailedResponse));
        dashboardActionCreator.loadDashboard()(dispatch);
      });

      it('Should dispatch the LOAD_DASHBOARD_FAIL action', () => {
        expect(dispatch.mock.calls).toHaveLength(2);
        expect(dispatch).toBeCalledWith(dashboard.loadDashboard());
        expect(dispatch).toBeCalledWith(dashboard.loadDashboardFailed(loadDashboardFailedResponse.error));
      });
    });
  });
});
