import React from 'react'
import './signup.css'

const Signup = () => {
  return (
    <div className='signup-container'>
        <h2>Signup Form</h2>
    <form>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter username" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter password" />
      </div>
      <button type="submit">Sign Up</button>
    </form>
    </div>
  )
}

export default Signup