import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-bootstrap';
import NavigationBar from '../NavigationBar/NavigationBar';
import { getCookie } from '../../utils/cookie';
import { SESSION_COOKIE_NAME } from '../../utils/constants';
import * as authActionCreator from '../../actionCreators/authActionCreator';
import './DashboardPage.css';

export class DashboardComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const sid = getCookie(SESSION_COOKIE_NAME);
    if (!sid) {
      this.props.history.push('/signin');
    } else {
      this.props.getUser(sid);
    }
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
  getUser: PropTypes.func.isRequired,
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
    getUser: authActionCreator.getUser
  }, dispatch);
};

const Dashboard = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComponent));

export default Dashboard;

