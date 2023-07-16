import "../App.css";
import logo from "../assets/vite.svg";

function Header() {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <h1>LiteCode</h1>
    </nav>
  );
}

export default Header;
