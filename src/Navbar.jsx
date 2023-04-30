import { Link } from "react-router-dom";
import "./App.css";
function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Codex</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-underline">
                            <li className="nav-item">
                                <Link className="nav-Link active" aria-current="page" to="/Problems">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-Link" to="/Problems">Problems</Link>
                            </li>
                            {/*<li className="nav-item">*/}
                            {/*    <Link className="nav-Link" to="/Contest">Contest</Link>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                            {/*    <Link className="nav-Link" to="/">Discuss</Link>*/}
                            {/*</li>*/}
                        </ul>
                        <form className="d-flex" role="search">
                            <Link to="/login"><button className="btn btn-outline-success" type="submit">Login</button></Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar
