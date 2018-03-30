import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Grid, Col, Row, Panel, ButtonToolbar, Button, FormGroup, ControlLabel, FormControl, Alert } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavigationBar from '../NavigationBar/NavigationBar';
import { REGISTER_SUCCESS } from '../../utils/constants';
import * as authActionCreator from '../../actionCreators/authActionCreator';

export class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }

  componentWillMount() {
    this.props.clearNotification();
  }

  componentDidUpdate() {
    if (this.props.pageStatus === REGISTER_SUCCESS) {
      setTimeout(() => {
        this.props.history.push('/signin');
      }, 2000);
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  register() {
    this.props.register(this.state.username, this.state.email, this.state.password);
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
                <Panel.Title componentClass="h3">Register</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <form>
                  <FormGroup controlId="username">
                    <ControlLabel>Username</ControlLabel>
                    <FormControl type="text" ref="username" label="Username" placeholder="Username" onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup controlId="email">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl type="email" ref="username" label="Email" placeholder="Email" onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup controlId="password">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl type="password" ref="password" label="Password" placeholder="Password" onChange={this.handleChange} />
                  </FormGroup>
                </form>
                {notification}
                <ButtonToolbar>
                  <Button bsStyle="primary" onClick={() => this.register()}>Register</Button>
                  <Button onClick={() => this.props.history.push('/signin')}>Sign In</Button>
                </ButtonToolbar>
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

RegisterComponent.propTypes = {
  register: PropTypes.func.isRequired,
  clearNotification: PropTypes.func.isRequired,
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
    register: authActionCreator.register,
    clearNotification: authActionCreator.clearNotification
  }, dispatch);
};

const RegisterPage = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterComponent));

export default RegisterPage;

