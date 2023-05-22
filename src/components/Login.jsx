import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

const Login = () => {
const [email, setEmail] = useState("")
const [password, setPasssword] = useState("")

const OnSubmit = (e)=>{
    e.preventDefault()
    const credentials = {email, password}

    //login(credentials)  ==> send post request to backend
}

    const navigate = useNavigate()
    return (
        <div className='flex justify-center items-center w-full h-screen' style={{ "backgroundColor": "#eceff1" }}>
            <div className='h-2/3 bg-white w-1/4 pt-10'>
                <div className='flex flex-col items-center mb-2'>
                    <img src={logo} alt="logo" />
                </div>

                <form className='flex flex-col items-center justify-center pt-5' onSubmit={OnSubmit}>
                    <div className='w-3/4 h-12 border-2 border-gray-300 shadow-sm my-5 rounded-sm'>
                        <label className='w-full h-full  rounded-sm'>
                            <input type="email" name='email' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} className='w-full h-full p-2 outline-none rounded-sm' />
                        </label>
                    </div>
                    <div className='w-3/4 h-12 border-2 border-gray-300 shadow-sm my-5 rounded-sm'>
                        <label className='w-full h-full  rounded-sm'>
                            <input type="password" name='password' placeholder='Password' value={password} onChange={(e)=> setPasssword(e.target.value)} className='w-full h-full p-2 outline-none  rounded-sm' />
                        </label>
                    </div>
                    <div className='w-3/4 h-12 border-2 border-gray-300 shadow-sm my-5 bg-gray-500  rounded-sm'>
                        <button type='submit' className='w-full h-full p-2  rounded-sm text-white'>Login</button>
                    </div>
                </form>
                <div className='mt-4 flex items-center justify-center text-gray-400'>
                    <button type='button' className='hover:text-gray-600' onClick={() => navigate("/signup")}>Sign Up</button>
                </div>


            </div>

        </div>
    )
}

export default Login

