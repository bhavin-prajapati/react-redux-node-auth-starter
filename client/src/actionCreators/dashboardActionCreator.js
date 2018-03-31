import fetch from 'node-fetch';
import * as dashboard from '../actions/dashboard';
import { BASE_URL, DASHBOARD_ENDPOINT } from '../utils/constants';

export const loadDashboard = () => {
  return (dispatch) => {
    const options = {
      method: 'get',
      credentials: 'include' // Don't forget to specify this if you need cookies
    };
    fetch(BASE_URL + DASHBOARD_ENDPOINT, options)
      .then(res => res.json())
      .then((response) => {
        if (response.error) {
          dispatch(dashboard.loadDashboardFailed(response.error));
        } else {
          dispatch(dashboard.loadDashboardSuccess(response));
        }
      });
  };
};

export default { loadDashboard };
