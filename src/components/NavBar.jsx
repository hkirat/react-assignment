import Logo from './../assets/LeetCode.jpg';
import { useState } from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState("");

    const handleLinkClick = (event) => {
        setActiveLink(event.target.text);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} height="24" width="100" className="d-inline-block align-text-top" alt="LeetCode Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={`nav-link ${activeLink === "Explore" ? "active" : ""}`} to="/" onClick={handleLinkClick}>Explore</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${activeLink === "Problems" ? "active" : ""}`} to="/problems" onClick={handleLinkClick}>Problems</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${activeLink === "Interview" ? "active" : ""}`} to="/interview" onClick={handleLinkClick}>Interview</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${activeLink === "Contest" ? "active" : ""}`} to="/contest" onClick={handleLinkClick}>Contest</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${activeLink === "Discuss" ? "active" : ""}`} to="/discuss" onClick={handleLinkClick}>Discuss</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className={`nav-link ${activeLink === "Register" ? "active" : ""}`} to="/signup"  onClick={handleLinkClick}>Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${activeLink === "Sign In" ? "active" : ""}`} to="/login" onClick={handleLinkClick}>Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default NavBar;
