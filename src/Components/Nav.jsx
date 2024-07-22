import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav() {
    

    return (
        <div className='w-full h-16 bg-slate-600 flex'>
            <div className='w-1/2 h-full flex'>
            <h1 className='px-20 py-4 font-semibold text-zinc-50 text-2xl'>LEETCODE</h1>
            <h2 className='items-center justify-center px-24 py-4 text-amber-500 text-xl'><NavLink to="/problemset/all">Problems</NavLink>
            </h2>
            </div>
            <div className='w-1/2 px-24 h-full flex  gap-20 ml-96'>
            <button className=' text-zinc-50'><NavLink to="/login">Login</NavLink>
            </button>
            <button className=' text-zinc-50'>Signup</button>
            </div>
        </div>
    )
}
export default Nav;