import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { SESSION_COOKIE_NAME } from '../../utils/constants';
import { getCookie } from '../../utils/cookie';

export class AuthRoute extends Component {
  render() {
    const Comp = this.props.component;
    if (this.props.getCookie(SESSION_COOKIE_NAME)) {
      return (<Comp {...this.props} />);
    }
    return (<Redirect to={{ pathname: '/signin' }} />);
  }
}

AuthRoute.propTypes = {
  component: PropTypes.func.isRequired,
  getCookie: PropTypes.func,
  pageStatus: PropTypes.string
};

AuthRoute.defaultProps = {
  pageStatus: '',
  getCookie: getCookie
};

function mapStateToProps(state) {
  return {
    pageStatus: state.auth.pageStatus
  };
}

export default withRouter(connect(mapStateToProps, null)(AuthRoute));
