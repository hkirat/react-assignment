import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { clearAuthError, signUp } from "../../actions/actionCreators/auth";
const formErrorInput = "please enter valid user details";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password1: "",
      password2: "",
      userName: "",
      formError: false,
    };
  }
  updateEmailOnUserInput = (event) => {
    this.setState({ email: event.target.value });
  };
  updateUsernameOnUserInput = (event) => {
    this.setState({ userName: event.target.value });
  };
  updatePassword1OnUserInput = (event) => {
    this.setState({ password1: event.target.value });
  };
  updatePassword2OnUserInput = (event) => {
    this.setState({ password2: event.target.value });
  };
  validateFormField = (formField) => {
    return formField.length > 0;
  };
  submitForm = (event) => {
    event.preventDefault();
    let { email, userName, password1, password2 } = this.state;
    this.validateFormField(email) &&
    this.validateFormField(password1) &&
    this.validateFormField(userName) &&
    this.validateFormField(password2) &&
    password1 === password2
      ? (() => {
          this.setState({ formError: false });
          this.props.dispatch(signUp(email, userName, password1, password2));
        })()
      : (() => {
          this.setState({ formError: formErrorInput });
        })();
  };
  componentWillUnmount() {
    if (this.state.formError) this.setState({ formError: false });
    this.props.dispatch(clearAuthError());
  }
  render() {
    let { error, isLoggedin } = this.props.auth;

    if (isLoggedin) {
      return <Navigate to="/" />;
    }
    return (
      <Container style={{ marginTop: "16%", marginBottom: "80px" }}>
        <Row>
          <h1 className="text-center mb-5 mt-3">
            Sign Up to keep a track of your Work !
          </h1>
        </Row>
        <Row>
          <Col sm={{ span: 6, offset: 3 }}>
            {this.state.formError ? (
              <p className="alert alert-danger py-2 text-center">
                {this.state.formError}
              </p>
            ) : null}
            {/* error from server */}
            {error && (
              <p className="alert alert-danger py-2 text-center">{error}</p>
            )}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={this.updateEmailOnUserInput}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="userName"
                onChange={this.updateUsernameOnUserInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password1"
                onChange={this.updatePassword1OnUserInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Re-Enter Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Re-Enter Password"
                name="password2"
                onChange={this.updatePassword2OnUserInput}
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit" onClick={this.submitForm}>
                Submit
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.userAuth,
  };
};
export default connect(mapStateToProps)(SignUp);
