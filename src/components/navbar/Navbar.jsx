import {Routes, Route , Outlet , Link}from 'react-router-dom';
const Navbar = () => {
  return(
    <>
    <div className="landingPage-buttons">
    
	<Link to="/">
    <button id="button">Home</button>
    </Link>

		<Link to="/signup">
    <button id="button">Signup</button>
    </Link>

    <Link to="/login">
    <button id="button">Login</button>
    </Link>

    <Link to="/problems/all">
    <button id="button">Problems</button>
    </Link>

    <Link to="/problems/slug">
    <button id="button">Problem :slug</button>
    </Link>

    </div>
		
    </>
  )}

export default Navbar
