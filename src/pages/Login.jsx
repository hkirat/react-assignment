import React from 'react'

const Login = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '20%' }}>
            <input type="text" placeholder='email' />
            <input type="password" placeholder='password' />
            <button type='submit'>Login</button>
        </div>
    )
}

export default Login