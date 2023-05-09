import { Routes, Route, Outlet, Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <div >
    <nav className='p-4 bg-slate-800 shadow md:flex md:items-center md:justify-between '>

    <ul className=' mx-20 md:flex md:items-center text-gray-100 '>


<li>
    <span className='text-2xl font-mono cursor-pointer text-gray-100 '>
    <img className='h-8 inline '
    src='https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png'></img>
    <Link to='/' className='mx-1'>
    Leetcode </Link></span>
</li>

    <li className='mx-10'>
    <Link to='/' className='text-xl hover:text-blue-400 duration-500'>Home</Link>
    </li>

    <li className='mx-5 '>
    <Link to='/problems/all' className='text-xl hover:text-blue-400 duration-500'>Problems</Link>
    </li>

    </ul>

    <ul className=' mx-20 md:flex md:items-center text-gray-100 '>
    <li className='mx-5'>

    <Link to='/login' className='text-xl hover:text-blue-400 duration-500'>Login</Link>
    </li>



    <li className='mx-5'>
    <Link to='/problems/slug' className='text-xl hover:text-blue-400 duration-500'>Single problem</Link>
    </li>

    </ul>
    </nav>
    </div>

    </>
  )
}

export default Navbar


