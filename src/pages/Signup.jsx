import React from 'react'

const Signup = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '20%' }}>
            <input type="text" placeholder='email' />
            <input type="password" placeholder='password' />
            <button type='submit'>Signup</button>
        </div>
    )
}

export default Signup