import React from 'react'

import "./Login.css"

const Login = () => {
  return (
    <div id="login" className='flex-col'>
      <h1>Login</h1>
      <form className='signup-form' method="post" action='/login'>

        <div className='subform'>
          <label htmlFor="name">Name: </label>
          <input type="text" name='name' placeholder='Your Name' />
        </div>

        <div className='subform'>
          <label htmlFor="email">Email: </label>
          <input type="text" name='email' placeholder='Your Email' />
        </div>

        <div className='subform'>
          <label htmlFor="password">Password: </label>
          <input type="text" name='password' placeholder='Your Password' />
        </div>

      </form>
    </div>
  )
}

export default Login ;