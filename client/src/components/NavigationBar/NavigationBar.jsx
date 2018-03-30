import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as pageActionCreator from '../../actionCreators/authActionCreator';

export class NavigationBarComponent extends Component {
  render() {
    let dropDown = null;
    if (this.props.username) {
      dropDown = (
        <Nav pullRight>
          <NavDropdown title={this.props.username} id="basic-nav-dropdown">
            <MenuItem onClick={this.props.logout}>Logout</MenuItem>
          </NavDropdown>
        </Nav>);
    }

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">React-Redux-Node-Auth-Starter</a>
          </Navbar.Brand>
        </Navbar.Header>
        {dropDown}
      </Navbar>
    );
  }
}

NavigationBarComponent.propTypes = {
  logout: PropTypes.func,
  username: PropTypes.string
};

NavigationBarComponent.defaultProps = {
  logout: () => { },
  username: ''
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    pageStatus: state.auth.pageStatus,
    message: state.auth.message,
    error: state.auth.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout: pageActionCreator.logout
  }, dispatch);
};

const NavigationBar = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBarComponent));

export default NavigationBar;

