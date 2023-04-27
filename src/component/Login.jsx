import './login.css'

const Login = () => {
  return (
    <div className='login-container'>
      <form className='login-form'>
        <h2>Login</h2>
        <div className='login-controller'>
          <label className='login-label'>Email: </label>
          <input
            type='text'
            className='login-input'
            placeholder='Enter email...'
          />
        </div>
        <div className='login-controller'>
          <label className='login-label'>Password: </label>
          <input
            type='text'
            className='login-input'
            placeholder='Password...'
          />
        </div>
        <div className='login-actions'>
          <button className='login-btn-register'>Register</button>
          <button className='login-btn-login'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
