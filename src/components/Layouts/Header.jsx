//
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar-mk">
      <nav className="navbar bg-dark navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/">
          <b>Manthan-MK</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                <b>Home</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Login"}>
                <b>Login</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Register"}>
                <b>Register</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={"https://manthan-mk-website.vercel.app/"}
                target="_blank"
              >
                <b>My Website</b>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
