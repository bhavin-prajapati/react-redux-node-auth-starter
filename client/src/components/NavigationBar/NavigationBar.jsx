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
    if (this.props.user && this.props.user.username) {
      dropDown = (
        <Nav pullRight>
          <NavDropdown title={this.props.user.username} id="basic-nav-dropdown">
            <MenuItem onClick={this.props.logout}>Logout</MenuItem>
          </NavDropdown>
        </Nav>);
    }

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">React-Redux-Node-Auth-Starter</a>
          </Navbar.Brand>
        </Navbar.Header>
        {dropDown}
      </Navbar>
    );
  }
}

NavigationBarComponent.propTypes = {
  logout: PropTypes.func,
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string
  })
};

NavigationBarComponent.defaultProps = {
  logout: () => { },
  user: {}
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
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

