import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Navbar = () => {
    return (
        <div className='flex h-16 w-full justify-evenly items-center gap-3 shadow-md'>
            <Link to='/' className='flex gap-0 items-center justify-center'>
                <div>
                    <img src={logo} width={45} height={45} />
                </div>
                    <div className='ml-1'>leetcode-clone</div>
            </Link>
            <div className=''>
                <Link to='/problems' className='text-lg font-normal'>Problems</Link>
            </div>
            <div className=''>
                <Link to='/login' className='text-lg font-normal'>Login</Link>
            </div>
            <div className=''>
                <Link to='/signup' className='text-lg font-normal'>Sign up</Link>
            </div>
            
        </div>
    )
}

export default Navbar