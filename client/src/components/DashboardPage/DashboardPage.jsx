import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeCookie } from '../../utils/cookie';
import { SESSION_COOKIE_NAME } from '../../utils/constants';
import * as authActionCreator from '../../actionCreators/authActionCreator';
import './DashboardPage.css';

export class DashboardComponent extends Component {
  componentDidUpdate() {
    removeCookie(SESSION_COOKIE_NAME); // Ensure cookie is removed
    this.props.history.push('/signin');
  }

  render() {
    return (
      <div className="dashboard-page">
        <header className="dashboard-header">
          <h1 className="dashboard-title">Dashboard Page</h1>
          <button onClick={this.props.logout}>Logout</button>
        </header>
      </div>
    );
  }
}

DashboardComponent.propTypes = {
  logout: PropTypes.func.isRequired,
  history: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

DashboardComponent.defaultProps = {
  history: null
};

const mapStateToProps = (state) => {
  return {
    pageStatus: state.auth.pageStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout: authActionCreator.logout
  }, dispatch);
};

const Dashboard = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComponent));

export default Dashboard;

