import { Routes, Route, Outlet, Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <div >
    <nav className='p-4 bg-slate-600 shadow md:flex md:items-center md:justify-between '>

    <ul className=' mx-40 md:flex md:items-center text-gray-100 '>


<li>
    <span className='text-xl font-mono cursor-pointer text-gray-100 '>
    <img className='h-9 inline '
    src='https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png'></img>
    <Link to='/' className='mx-2 my-2 '>
    Shitcode </Link></span>
</li>

    <li className='mx-2 italic'>
    <Link to='/' className='text-xl hover:text-black duration-500'>home</Link>
    </li>

    <li className='mx-5 italic'>
    <Link to='/problems/all' className='text-xl hover:text-black duration-500'>problems</Link>
    </li>

    </ul>

    <ul className=' mx-40 md:flex md:items-center text-gray-100 italic'>
    <li className='mx-5'>

    <Link to='/login' className='text-xl hover:text-black duration-500'>login</Link>
    </li>



    <li className='mx-5'>
    <Link to='/problems/slug' className='text-xl hover:text-black duration-500'>single problem</Link>
    </li>

    <li className='mx-5'>
    <a href='https://github.com/KaKashi1210/react-assignment' target='_blank' className='text-xl hover:text-black duration-500'>contribute</a>
    </li>

    </ul>
    </nav>
    </div>

    </>
  )
}

export default Navbar


