// Layout.jsx

import React from 'react';

const Layout = (props) => {
  // You can define the layout structure here
  return (
    <div>
      <header className='p-3 text-bg-dark'>
        {/* Header content */}
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a xlinkHref="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a xlinkHref="#" className="nav-link px-2 text-secondary">Explore</a></li>
          <li><a xlinkHref="#" className="nav-link px-2 text-white">Problems</a></li>
          <li><a xlinkHref="#" className="nav-link px-2 text-white">Contest</a></li>
          <li><a xlinkHref="#" className="nav-link px-2 text-white">Discuss</a></li>
          <li><a xlinkHref="#" className="nav-link px-2 text-white">Interview</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
      </header>
      <main>
        {props.children}
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Layout;
