import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as authActionCreator from '../../actionCreators/authActionCreator';
import './RegisterPage.css';

class RegisterPageComponent extends Component {
  componentDidUpdate() {
    console.log('this.props.pageStatus', this.props.pageStatus);
    if (this.props.pageStatus === 'login_success') {
      this.props.history.push('/');
    }
  }

  render() {
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
          <a className="register" href="/signin">Sign in</a>
        </div>
      </div>
    );
  }
}

RegisterPageComponent.propTypes = {
  register: PropTypes.func.isRequired,
  history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  pageStatus: PropTypes.string
};

RegisterPageComponent.defaultProps = {
  pageStatus: '',
  history: null
};

const mapStateToProps = (state) => {
  return {
    pageStatus: state.auth.pageStatus
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
)(RegisterPageComponent));

export default RegisterPage;

