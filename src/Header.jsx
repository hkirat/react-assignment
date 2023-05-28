import './Header.css'
const Header = () =>{
    return (
        <header className="header">
        <h1>GeekCode</h1>
        <nav className="navigation">
          <a href="/">Home</a>
          <a href="/problems">Problems</a>
          <a href="/signup">SignUp/Login</a>
        </nav>
      </header>
    );
}

export default Header;