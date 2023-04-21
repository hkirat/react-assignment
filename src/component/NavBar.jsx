import logo from "../assets/logo.avif"

import { Outlet, NavLink } from "react-router-dom"
import './NavBar.css'
const Navbar = () =>{
    return(
        <>
        <div className="navbar">
            <img src={logo} alt="" />
            <div>
                <NavLink className="navlink"  to="/problems">Problems</NavLink>
                <NavLink className="navlink" to='/login'>Login</NavLink>
                <NavLink className="navlink" to='/signup'>Signup</NavLink>
            </div>
            
        </div>
        <Outlet/>
        </>
    )
}
export default Navbar