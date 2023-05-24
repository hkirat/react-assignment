import logo from "../assets/logo.avif"

import { Outlet, NavLink } from "react-router-dom"
// import './NavBar.css'
const Navbar = () =>{
    return(
        <>
        <div className=" flex justify-between items-center py-[5px]  px-[20px] font-normal border-b-1 bg-gray-900 ">
            <img src={logo} alt="" className="h-[50px] rounded-full"/>
            <div className="text-cyan-500">
                <NavLink className="px-4"  to="/problems">Problems</NavLink>
                <NavLink className="px-4" to='/login'>Login</NavLink>
                <NavLink className="px-4" to='/signup'>Signup</NavLink>
            </div>
            
        </div>
        <Outlet/>
        </>
    )
}
export default Navbar