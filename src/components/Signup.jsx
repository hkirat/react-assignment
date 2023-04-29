import React from 'react'

const Signup = () => {
  return (
    
    <main id='loginMain'>
      <div className="login">

        <h2>Sign Up</h2>
        <div class="container">
          <label className='label' for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />

          <label className='label' for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <label className='label' for="psw"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw" required />

          <button type="submit">Sign Up</button>
          <label className='label'>
            <input type="checkbox" checked="checked" name="remember" /> Remember me
          </label>
          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
        </div>

      </div>
    </main>
  )
}

export default Signup