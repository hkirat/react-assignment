import Logo from './../assets/LeetCode.jpg';
import { useState } from "react";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";
import Problems from "./Problems.jsx";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState("");
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showProblems, setProblems] = useState(false)

    const handleLinkClick = (event) => {
        setActiveLink(event.target.text);
        setProblems(false);
        setShowSignUp(false);
        setShowSignIn(false);
    };
    const handleProblemsClick = (event) => {
        setActiveLink(event.target.text);
        setProblems(true);
        setShowSignUp(false);
        setShowSignIn(false);
    };
    const handleSignInClick = (event) => {
        setActiveLink(event.target.text);
        setShowSignIn(true);
        setShowSignUp(false);
        setProblems(false);
    };
    const handleSignUpClick = (event) => {
        setActiveLink(event.target.text);
        setShowSignUp(true);
        setShowSignIn(false);
        setProblems(false);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} height="24" width="100" className="d-inline-block align-text-top" alt="LeetCode Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className={`nav-link ${activeLink === "Explore" ? "active" : ""}`} href="#" onClick={handleLinkClick}>Explore</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeLink === "Problems" ? "active" : ""}`} href="#" onClick={handleProblemsClick}>Problems</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeLink === "Interview" ? "active" : ""}`} href="#" onClick={handleLinkClick}>Interview</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeLink === "Contest" ? "active" : ""}`} href="#" onClick={handleLinkClick}>Contest</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeLink === "Discuss" ? "active" : ""}`} href="#" onClick={handleLinkClick}>Discuss</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className={`nav-link ${activeLink === "Register" ? "active" : ""}`} href="#"  onClick={handleSignUpClick}>Register</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeLink === "Sign In" ? "active" : ""}`} href="#" onClick={handleSignInClick}>Sign In</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {showSignIn && <SignIn/>}
            {showSignUp && <SignUp/>}
            {showProblems && <Problems />}
        </>
    )
};

export default NavBar;
