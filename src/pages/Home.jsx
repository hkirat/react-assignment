import './../index.css'
import { FaHome, FaKey, FaIdBadge, FaUserTimes } from 'react-icons/fa';

export default function Home() {

    return (
        <div className='bg-slate-800 h-screen w-screen mx-auto'>
            <nav className='flex flex-row justify-center place-items-center w-full h-8 transition ease-in-out duration-300 bg-slate-900/40 hover:bg-slate-900/25 mx-auto shadow-2xl shadow-sky-400/75 space-x-20'>
                <span className="  cursor-pointer flex flex-row text-red-500 font-mono text-xl space-x-2 "><FaHome size="1.5rem" /><a href='#'>Home</a></span>
                <span className=" cursor-pointer flex flex-row text-white font-mono hover:text-green-500 transition ease-in-out duration-300 text-xl  space-x-2"><FaKey size="1.3rem"/><a href='/login'>Login</a></span>
                <span className=" cursor-pointer flex flex-row text-white font-mono hover:text-orange-500 transition ease-in-out duration-300 text-xl  space-x-2"><FaIdBadge size="1.3rem"/><a href='/signup'>SignUp</a></span>
            </nav>

            <div className='text-slate-400 font-mono text-6xl my-16 flex flex-row justify-center max-w-fit mx-auto'>
                Welcome to YouCode
                </div>

                <div className=" border-slate-600 border-solid border-4 max-w-fit mx-auto p-4 bg-slate-950 shadow-2xl">
                    <span className='animate-pulse mx-auto text-red-500 justify-items-center flex max-w-fit'>
                        <FaUserTimes size="4rem" />
                    </span>
                    <div className='text-slate-400 text-xl font-semibold flex-row justify-items-center place-items-center mx-auto max-w-fit '> Can't recognize you.  Try to Login or SignUp</div>

                </div>
                
        </div>





    )

    
};
