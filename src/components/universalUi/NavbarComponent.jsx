import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/actionCreators/auth";
import ProfileDropdown from "./ProfileDropdown";

class NavbarComponent extends Component {
  logOut = () => {
    localStorage.removeItem("token");
    this.props.dispatch(logoutUser());
  };
  getProtectedLinks = (isLoggedIn) => {
    return isLoggedIn ? (
      <React.Fragment></React.Fragment>
    ) : (
      <React.Fragment>
        <Nav.Link as={Link} to="/user/sign-in">
          sign in
        </Nav.Link>
        <Nav.Link as={Link} to="/user/sign-up">
          sign up
        </Nav.Link>
      </React.Fragment>
    );
  };

  render() {
    const { auth } = this.props;
    return (
      <div>
        <Navbar bg="light" expand="md">
          <Container className=" pe-5">
            <Navbar.Brand>Geek Code</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="">{this.getProtectedLinks(auth.isLoggedin)}</Nav>
              <Nav className="ms-auto">
                {auth.isLoggedin ? (
                  <ProfileDropdown user={auth.user} logOut={this.logOut} />
                ) : null}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.userAuth,
  };
};
export default connect(mapStateToProps)(NavbarComponent);
