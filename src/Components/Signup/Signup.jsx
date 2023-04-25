import React from 'react'

import "./Signup.css"
const Signup = () => {
  return (
    <div id="signup" className='flex-col'>
      <h1>Signup</h1>
      <form className='signup-form' method="post" action='/signup' >

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

export default Signup