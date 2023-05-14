import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className="login-container">
    <h2>Login</h2>
      <form>
        
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" className="form-control" id="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login