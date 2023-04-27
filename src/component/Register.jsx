import './register.css'

const Register = () => {
  return (
    <div className='register-container'>
      <form className='register-form'>
        <h2>Register</h2>
        <div className='register-controller'>
          <label className='register-label'>Email: </label>
          <input
            type='text'
            className='register-input'
            placeholder='Enter email...'
          />
        </div>
        <div className='register-controller'>
          <label className='register-label'>Password: </label>
          <input
            type='text'
            className='register-input'
            placeholder='Password...'
          />
        </div>
        <div className='register-actions'>
          <button className='register-btn-login'>Back to login</button>
          <button className='register-btn-register'>Sign up</button>
        </div>
      </form>
    </div>
  )
}

export default Register
