import React, { Component } from 'react';
import './index.css'


class SignUpPage extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
handleSubmit=()=>{
    const {history} = this.props
    history.replace("/")
}
   

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" value={this.state.firstName} onChange={this.handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" value={this.state.lastName} onChange={this.handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUpPage;
