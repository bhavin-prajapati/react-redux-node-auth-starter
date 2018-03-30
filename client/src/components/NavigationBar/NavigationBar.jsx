import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as pageActionCreator from '../../actionCreators/authActionCreator';

export class NavigationBarComponent extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">React-Redux-Node-Auth-Starter</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

NavigationBarComponent.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  pageStatus: PropTypes.string,
  message: PropTypes.string,
  error: PropTypes.string
};

NavigationBarComponent.defaultProps = {
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

const NavigationBar = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBarComponent));

export default NavigationBar;

