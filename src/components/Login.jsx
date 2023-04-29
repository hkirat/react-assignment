import React from 'react'

const Login = () => {
  return (
    <main id='loginMain'>
      <div className="login">

        <h2>Login</h2>
        <div class="container">
          <label className='label' for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />

          <label className='label' for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <button type="submit">Login</button>
          <label className='label'>
            <input type="checkbox" checked="checked" name="remember" /> Remember me
          </label>
        </div>

      </div>
    </main>
  )
}

export default Login