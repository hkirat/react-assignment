import { Routes, Route, Outlet, Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <div className="flex fixed top-0 left-0 h-screen w-16 m-0 flex-col text-white shadow-lg bg-indigo-500 justify-evenly">   
    <Link to="/">
    <SideBarIcon letter="H" text="Home" />
    </Link>
    
     <Link to="/problems/all">
    <SideBarIcon letter="P"  text="All Problems" />
    </Link>

    <Link to="/signup">
    <SideBarIcon letter="S"  text="Signup"/>
    </Link>

    <Link to="/Login">
    <SideBarIcon letter="L" text="Login"/>
    </Link>

    <Link to="/problems/slug">
    <SideBarIcon letter="Sp" text="Single Problem" />
    </Link>


    </div>
   </>
  )
}

export default Navbar


const SideBarIcon = ({letter , text }) => {
  return (
<>
  <div className='sidebar-icon group'>
    {letter} 
   
    <span className='sidebar-tooltip group-hover:scale-100'>
    {text}
    </span>
    </div>
  </>
  )
} 
