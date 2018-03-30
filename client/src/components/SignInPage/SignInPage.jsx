import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Grid, Col, Row, Panel, ButtonToolbar, Button, FormGroup, ControlLabel, FormControl, Alert } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavigationBar from '../NavigationBar/NavigationBar';
import { getCookie } from '../../utils/cookie';
import { SESSION_COOKIE_NAME } from '../../utils/constants';
import * as pageActionCreator from '../../actionCreators/authActionCreator';

export class SignInComponent extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      username: '',
      password: ''
    };
  }

  componentWillMount() {
    // When loading signin page if there's aleady a cookie, go to dashboard
    if (getCookie(SESSION_COOKIE_NAME)) {
      this.props.history.push('/dashboard');
    }
  }

  componentDidUpdate() {
    // If user has logged in successfully, go to dashboard
    if (getCookie(SESSION_COOKIE_NAME)) {
      this.props.history.push('/dashboard');
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  login() {
    this.props.login(this.state.username, this.state.password);
  }

  render() {
    const { error, message } = this.props;

    let notification = '';
    if (error) {
      notification = (<Alert bsStyle="danger"><p>{error}</p></Alert>);
    } else if (message) {
      notification = (<Alert bsStyle="warning"><p>{message}</p></Alert>);
    }

    return (
      <Grid>
        <Row>
          <Col>
            <NavigationBar />
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4} xsOffset={4}>
            <Panel bsStyle="primary">
              <Panel.Heading>
                <Panel.Title componentClass="h3">Sign In</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <form>
                  <FormGroup controlId="username">
                    <ControlLabel>Username</ControlLabel>
                    <FormControl type="email" ref="username" label="Username" placeholder="Username" onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup controlId="password">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl type="password" ref="password" label="Password" placeholder="Password" onChange={this.handleChange} />
                  </FormGroup>
                </form>
                {notification}
                <ButtonToolbar>
                  <Button bsStyle="primary" onClick={() => this.login()}>Login</Button>
                  <Button onClick={() => this.props.history.push('/register')}>Register</Button>
                </ButtonToolbar>
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

SignInComponent.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  pageStatus: PropTypes.string,
  message: PropTypes.string,
  error: PropTypes.string
};

SignInComponent.defaultProps = {
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
    login: pageActionCreator.login
  }, dispatch);
};

const SignInPage = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInComponent));

export default SignInPage;

