import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar-nav'>
      <ul className='navbar-lists'>
        <li className='navbar-list'>
          <Link to='/' className='navbar-listItem'>
            Home
          </Link>
        </li>
        <li className='navbar-list'>
          <Link to='problemset/all' className='navbar-listItem'>
            Problems
          </Link>
        </li>
        <li className='navbar-list'>
          <Link to='register' className='navbar-listItem'>
            Sign up
          </Link>
        </li>
        <li className='navbar-list'>
          <Link to='login' className='navbar-listItem'>
            Login
          </Link>
        </li>
        <li className='navbar-list'>
          <Link href='#' className='navbar-listItem'>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
