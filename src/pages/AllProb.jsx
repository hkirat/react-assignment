import './../index.css'
import { FaHome, FaKey, FaIdBadge, FaQuestion } from 'react-icons/fa';

export default function AllProb() {

    return (
        <div className='bg-slate-800 h-screen w-screen mx-auto'>
        <nav className='flex flex-row justify-center place-items-center w-full h-8 transition ease-in-out duration-300 bg-slate-900/40 hover:bg-slate-900/25 mx-auto shadow-2xl shadow-sky-400/75 space-x-20'>
            <span className="  cursor-pointer flex flex-row text-white hover:text-red-500 font-mono text-xl space-x-2 "><FaHome size="1.5rem" /><a href='/'>Home</a></span>
            <span className=" cursor-pointer flex flex-row text-white hover:text-green-500 font-mono  transition ease-in-out duration-300 text-xl  space-x-2"><FaKey size="1.3rem"/><a href='/login'>Login</a></span>
            <span className=" cursor-pointer flex flex-row text-white hover:text-orange-500 font-mono transition ease-in-out duration-300 text-xl  space-x-2"><FaIdBadge size="1.3rem"/><a href='/signup'>SignUp</a></span>
            <span className=" cursor-pointer flex flex-row text-purple-500 font-mono  transition ease-in-out duration-300 text-xl  space-x-1"><FaQuestion size="1.4rem"/><a href='#'>Problems</a></span>
        </nav>
    
    
    
    
    
    </div>

    )

    
};
