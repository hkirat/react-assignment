import {Link} from "react-router-dom";
import leetLogo from "/src/assets/leetLogo.png";
function NavBar() {
    return(
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <img src={leetLogo} className={"w-6"}/>
                <a className="btn btn-ghost normal-case text-xl">LeetCode</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to={"/signup"}>Sign Up</Link>
                    </li>
                    <li>
                        <Link to={"/login"}>Log In</Link>
                    </li>
                    <li>
                        <Link to={"/problems"}>Problems</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;