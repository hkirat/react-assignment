import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate=useNavigate();
    const handleLogin=function(){
        navigate('/problemset/all');
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-1/3 h-1/4 bg-zinc-300 rounded-md p-5'>
               <div className='my-3'>
               Email: <input type="email" placeholder='email'/>
                </div>

                <div className='my-3'>
               Password: <input type="password" placeholder='password'/>
                </div>

               <button onClick={handleLogin} className='mt-4 px-3 py-1 bg-orange-400'>Login</button>
            </div>
        </div>
    );
}

export default Login;
