import React, { useState } from 'react'
import Layout from '../../Layout/Layout';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const submitHandle = () => {
        navigate('/')
    }
    return (
        <Layout>
            <div
                className='d-flex align-items-center justify-content-center flex-column'
                style={{
                    height: '77vh',
                    backgroundColor: '#ffdee9',
                }}
            >
                <form
                    autoComplete='false'
                    onSubmit={submitHandle}

                    className='shadow-lg p-4 mb-5 mt-2 bg-body-tertiary rounded rounded-0 '
                >
                    <h2 className='text-center'>Login Form</h2>
                    <div className='mb-3 mt-3'>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your Email'
                            type='email'
                            className='form-control border border-0 rounded-0'
                            id='exampleInputEmail1'
                            required
                            aria-describedby='emailHelp'
                            autoFocus
                        />
                    </div>
                    <div className='mb-3'>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter your Password'
                            type='password'
                            required
                            className='form-control border border-0 rounded-0'
                            id='exampleInputPassword1'
                        />
                    </div>

                    <span
                        role='button'
                        className='btn cursor-pointer'
                        onClick={() => navigate('/forgot-password')}
                    >
                        Forgot Password?
                    </span>
                    <button
                        type='submit'
                        className='btn btn-primary w-100 mt-5 mb-3'
                    >
                        Login
                    </button>
                </form>
            </div>
        </Layout>
    )
}

export default Login
