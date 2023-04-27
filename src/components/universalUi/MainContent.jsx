import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AllProblems from "../project/AllProblems";
import Problem from "../project/Problem";
import SignIn from "../user/SignIn";
import SignUp from "../user/signUp";
import PrivateRoute from "../user/PrivateRoute";
import { connect } from "react-redux";

class MainContent extends Component {
  render() {
    let { isLoggedin } = this.props.auth;
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col lg={{ span: 10, offset: 1 }}>
              <Routes>
                <Route path="/" element={<AllProblems />}></Route>
                <Route
                  path="/question/id/:id"
                  element={<Problem></Problem>}
                ></Route>
                <Route path="/user/sign-in" element={<SignIn />}></Route>
                <Route path="/user/sign-up" element={<SignUp />}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.userAuth,
  };
};
export default connect(mapStateToProps)(MainContent);
