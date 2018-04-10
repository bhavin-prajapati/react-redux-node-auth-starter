import api from '../utils/api';
import * as dashboard from '../actions/dashboard';

export const loadDashboard = () => {
  return (dispatch) => {
    dispatch(dashboard.loadDashboard());
    api.loadDashboard()
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
