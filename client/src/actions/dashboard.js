import {
  LOAD_DASHBOARD,
  LOAD_DASHBOARD_SUCCESS,
  LOAD_DASHBOARD_FAIL
} from '../utils/constants';

export const loadDashboard = () => {
  return { type: LOAD_DASHBOARD };
};

export const loadDashboardSuccess = (message) => {
  return { type: LOAD_DASHBOARD_SUCCESS, data: message };
};

export const loadDashboardFailed = (error) => {
  return { type: LOAD_DASHBOARD_FAIL, data: error };
};
