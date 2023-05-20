import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const Header = () => {

    return (
        <div>


            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/'> 🖥️ LeetCode</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"
                                    to='/register'

                                >
                                    Register
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/login'>Login</NavLink>
                            </li>


                            <li className="nav-item">
                                <NavLink className="nav-link"
                                    to='/login'

                                >
                                    Logout
                                </NavLink>
                            </li>



                        </ul>

                    </div>
                </div>
            </nav>

        </div >
    )
}

export default Header
