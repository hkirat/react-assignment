import {Link} from 'react-router-dom';

function Navbar () {
    return (
        <nav className='navbar'>
            <Link to="/"> Home </Link>
            <Link to="/login"> Login </Link>
            <Link to="/signup"> Signup </Link>
            <Link to="/problems/all"> Problems </Link>
        </nav>
    )
}

export default Navbar;