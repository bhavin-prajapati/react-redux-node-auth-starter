import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Col, Row, Jumbotron } from 'react-bootstrap';
import NavigationBar from '../NavigationBar/NavigationBar';
import { getCookie } from '../../utils/cookie';
import { SESSION_COOKIE_NAME } from '../../utils/constants';
import * as authActionCreator from '../../actionCreators/authActionCreator';
import * as dashboardActionCreator from '../../actionCreators/dashboardActionCreator';

export class DashboardComponent extends Component {
  componentWillMount() {
    const sid = getCookie(SESSION_COOKIE_NAME);
    if (!sid) {
      this.props.history.push('/signin');
    } else {
      this.props.getUser(sid);
    }

    if (!this.props.dashboard) {
      this.props.loadDashboard();
    }
  }

  render() {
    let dashboardData = '';
    if (this.props.dashboard) {
      dashboardData = this.props.dashboard.data;
    }
    return (
      <Grid>
        <Row>
          <Col>
            <NavigationBar />
          </Col>
        </Row>
        <Row>
          <Col>
            <Jumbotron>
              <h1>Hello World!</h1>
              <p>{dashboardData}</p>
            </Jumbotron>
          </Col>
        </Row>
      </Grid>
    );
  }
}

DashboardComponent.propTypes = {
  getUser: PropTypes.func,
  loadDashboard: PropTypes.func,
  history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  dashboard: PropTypes.shape({
    data: PropTypes.string
  })
};

DashboardComponent.defaultProps = {
  getUser: () => { },
  loadDashboard: () => { },
  history: null,
  dashboard: null
};

const mapStateToProps = (state) => {
  return {
    pageStatus: state.auth.pageStatus,
    dashboard: state.dashboard.dashboard
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getUser: authActionCreator.getUser,
    loadDashboard: dashboardActionCreator.loadDashboard
  }, dispatch);
};

const Dashboard = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComponent));

export default Dashboard;

