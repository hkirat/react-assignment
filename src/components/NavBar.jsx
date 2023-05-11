import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const activeClass = ({isActive}) =>{
    return isActive ? "border border-rounded bg-gray-900 border-gray-900 rounded-sm p-1 text-white font-bold" : "text-white font-bold"
}

export default function NavBar() {
  return (
    <div className=" flex flex-col bg-gradient-to-tr  from-gray-900 to-black min-h-screen" >    <nav className="bg-center bg-cover bg-no-repeat p-4 flex space-x-4 h-[3rem]" style={{backgroundImage: `url(https://img2.wallspic.com/originals/9/2/9/2/4/142929-line-purple-art-sky-abstractart-1920x1080.jpg)`}}>
    <div className="flex">
        <img src='https://assets.stickpng.com/images/5847eb76cef1014c0b5e484f.png'></img>
    <span className="text-white">
        DailyCode</span></div>
    <NavLink className={activeClass}
 to='/'>Home</NavLink>
    <NavLink to='/Profile' className={activeClass}>Profile</NavLink>
</nav>
<Outlet />
</div>
  )
}
