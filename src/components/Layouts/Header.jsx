//

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
              <a className="nav-link" href="/">
                <b>Home</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Login">
                <b>Login</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Register">
                <b>Register</b>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://manthan-mk-web.onrender.com/"
                target="_blank"
              >
                <b>My Website</b>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
