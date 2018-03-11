// http://mattshirley.net/authenticated-routes-with-react-router-v4-redux/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const AuthRoute = ({ component: Component, pageStatus, ...rest }) => (
  <Route
    {...rest}
    render={props => (pageStatus === 'login_success' ? <Component {...props} /> : <Redirect to={{ pathname: '/signin' }} />)}
  />
);

function mapStateToProps(state) {
  return {
    pageStatus: state.auth.pageStatus
  };
}

AuthRoute.propTypes = {
  component: PropTypes.func.isRequired,
  pageStatus: PropTypes.string
};

AuthRoute.defaultProps = {
  pageStatus: ''
};

export default withRouter(connect(mapStateToProps, null)(AuthRoute));
