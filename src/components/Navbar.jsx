import React, { useEffect , useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const auth=props;
  const [Token, setToken] = useState(props.token); 
  useEffect( () => {
    const getToken = localStorage.token;
    if (getToken !== undefined){
      setToken(getToken) ;
    }
  }, [])

  const clearLocalStorage = () => {
    localStorage.clear() ;
    setToken(undefined) ;
  } 

  return (
    <div className="flex h-10 justify-between bg-white shadow-lg items-ceter text-lg ">
      <div id="navbar-main" className="flex items-center gap-3 mx-3">
        <Link to={"/"}>
          <div className="logo-box flex-row">
            Logo
          </div>
        </Link>
        <div className="nav-options">
          <Link to={"/problems"}>Problems</Link>
        </div>
        { (Token === undefined)? (
        <>
        <div className="nav-options">
          <Link to={'/signup'} >Signup</Link>
        </div>
        <div className="nav-options">
          <Link to={'/login'} >Login</Link>
        </div>
        </>
      ) :
      (
        <div className="nav-options">
          <Link onClick={clearLocalStorage} to={'/Login'} >Logout</Link>
        </div>
      )}
      </div>
    </div>
  );
};

export default Navbar;