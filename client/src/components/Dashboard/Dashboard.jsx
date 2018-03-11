import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as pageActionCreator from '../../actionCreators/authActionCreator';
import './Dashboard.css';

class DashboardComponent extends Component {
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
  logout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    pageStatus: state.auth.pageStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout: pageActionCreator.logout
  }, dispatch);
};

const Dashboard = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComponent));

export default Dashboard;

