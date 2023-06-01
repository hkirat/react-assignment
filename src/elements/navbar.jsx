import "./navbar.css";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header>
        <nav id="nav-bar">
          <ul>
            <li id="logo-beside-explorer">
              <img src="./logo.png" alt="logo" />
            </li>
            <li>
              <Link to="/">Exploler</Link>
            </li>

            <li>
              <Link to="/problems/all">Problems</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </header>
    </>
  );
}

export default NavBar;
