import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { REGISTER_SUCCESS } from '../../utils/constants';

import * as authActionCreator from '../../actionCreators/authActionCreator';
import './RegisterPage.css';

export class RegisterComponent extends Component {
  componentDidUpdate() {
    if (this.props.pageStatus === REGISTER_SUCCESS) {
      setTimeout(() => {
        this.props.history.push('/signin');
      }, 2000);
    }
  }

  render() {
    const { error, message } = this.props;

    let notification = '';
    if (error) {
      notification = <div className="error">{error}</div>;
    } else {
      notification = <div className="message">{message}</div>;
    }

    return (
      <div className="register-page">
        <header className="header">
          <h1 className="title">Register</h1>
        </header>
        <div className="content">
          <div className="username">Username:</div><input ref="username" name="username" type="text" /><br />
          <div className="email">Email:</div><input ref="email" name="email" type="text" /><br />
          <div className="password">Password:</div><input ref="password" name="password" type="password" /><br />
          <button className="register" onClick={() => { this.props.register(this.refs.username.value, this.refs.email.value, this.refs.password.value); }}>Register</button>
          {notification}
          <a className="register" href="/signin">Sign in</a>
        </div>
      </div>
    );
  }
}

RegisterComponent.propTypes = {
  register: PropTypes.func.isRequired,
  history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  pageStatus: PropTypes.string,
  message: PropTypes.string,
  error: PropTypes.string
};

RegisterComponent.defaultProps = {
  pageStatus: '',
  message: '',
  error: '',
  history: null
};

const mapStateToProps = (state) => {
  return {
    pageStatus: state.auth.pageStatus,
    message: state.auth.message,
    error: state.auth.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    register: authActionCreator.register
  }, dispatch);
};

const RegisterPage = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterComponent));

export default RegisterPage;

