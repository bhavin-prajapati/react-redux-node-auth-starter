import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-bootstrap';
import NavigationBar from '../NavigationBar/NavigationBar';
import { removeCookie } from '../../utils/cookie';
import { SESSION_COOKIE_NAME } from '../../utils/constants';
import * as authActionCreator from '../../actionCreators/authActionCreator';
import './DashboardPage.css';

export class DashboardComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    removeCookie(SESSION_COOKIE_NAME); // Ensure cookie is removed
    this.props.history.push('/signin');
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <NavigationBar />
          </Col>
        </Row>
      </Grid>
    );
  }
}

DashboardComponent.propTypes = {
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
    logout: authActionCreator.logout,
    clearNotification: authActionCreator.clearNotification
  }, dispatch);
};

const Dashboard = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComponent));

export default Dashboard;

