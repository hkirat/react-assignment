import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
    const location = useLocation();
    return (
        <div id='navbar-main' className='navbar-container'>
            <Link to={'/'} className={`link nav-link `}>
                <div className="logo-box navbar-container">
                    <img className='logo' src="https://user-images.githubusercontent.com/63964149/152531278-5e01909d-0c2e-412a-8acc-4a06863c244d.png" alt="logo" />
                    <p>LeetCode</p>
                </div>
            </Link>
            <div className="nav-options">
                <Link to={'/all-problems'} className={`link nav-link ${location.pathname === '/all-problems' ? 'visited-link' : ''}`}>Problems</Link>
            </div>
            <div className="nav-options">
                <Link to={'/signup'} className={`link nav-link ${location.pathname === '/signup' ? 'visited-link' : ''}`}>Signup</Link>
            </div>
            <div className="nav-options">
                <Link to={'/login'} className={`link nav-link ${location.pathname === '/login' ? 'visited-link' : ''}`}>Login</Link>
            </div>
        </div>
    )
}

export default Navbar