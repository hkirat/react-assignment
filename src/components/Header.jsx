import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/vite.svg";

function Header() {
  return (
    <Link to="/" style={{color: "black", textDecoration: "none"}}>
      <nav>
        <img src={logo} alt="logo" />
        <h1>LiteCode</h1>
      </nav>
    </Link>
  );
}

export default Header;
