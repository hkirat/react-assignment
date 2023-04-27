import React, { Component } from "react";
import {
  Form,
  FloatingLabel,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { login, clearAuthError } from "../../actions/actionCreators/auth";
import { LOGIN_START } from "../../actions/actionTypes/auth";
const formErrorInput = "please enter valid Username and Password ";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formError: false,
    };
  }
  updateEmailOnUserInput = (event) => {
    this.setState({ email: event.target.value });
  };
  updatePasswordOnUserInput = (event) => {
    this.setState({ password: event.target.value });
  };
  validateFormField = (formField) => {
    return formField.length > 0;
  };
  submitForm = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const areEmailAndPasswordValidated =
      this.validateFormField(email) && this.validateFormField(password);
    areEmailAndPasswordValidated
      ? (() => {
          this.setState({ formError: false });
          this.props.dispatch(login(email, password));
        })()
      : this.setState({ formError: formErrorInput });
  };

  componentWillUnmount() {
    if (this.state.formError) this.setState({ formError: false });
    this.props.dispatch(clearAuthError());
  }
  render() {
    const { error, isAuthenticationInProgess, isLoggedin } = this.props.auth;
    // redirect logic
    if (isLoggedin) {
      return <Navigate to="/" />;
    }
    return (
      <Container style={{ marginTop: "16%" }}>
        <Row>
          <h1 className="text-center mb-5 mt-3">Sign in to view your work !</h1>
        </Row>
        <Row>
          <Col sm={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            {/* validation error */}
            {this.state.formError ? (
              <p className="alert alert-danger py-2 text-center">
                {this.state.formError}
              </p>
            ) : null}
            {/* error from sever */}
            {error && (
              <p className="alert alert-danger py-2 text-center">{error}</p>
            )}
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={this.updateEmailOnUserInput}
              />
              <Form.Text className="text-muted ">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.updatePasswordOnUserInput}
              />
            </Form.Group>

            <div className="text-center">
              <Button
                variant="primary"
                type="submit"
                onClick={this.submitForm}
                disabled={isAuthenticationInProgess}
              >
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
export default connect(mapStateToProps)(SignIn);
