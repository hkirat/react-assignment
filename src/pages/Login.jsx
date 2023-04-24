import './../index.css'
import { FaHome, FaKey, FaIdBadge } from 'react-icons/fa';

export default function Login() {

    return (
        <div className='bg-slate-800 h-screen w-screen mx-auto'>
            <nav className='flex flex-row justify-center place-items-center w-full h-8 transition ease-in-out duration-300 bg-slate-900/40 hover:bg-slate-900/25 mx-auto shadow-2xl shadow-sky-400/75 space-x-20'>
                <span className="  cursor-pointer flex flex-row text-white hover:text-red-500 font-mono text-xl space-x-2 "><FaHome size="1.5rem" /><a href='/'>Home</a></span>
                <span className=" cursor-pointer flex flex-row text-green-500 font-mono  transition ease-in-out duration-300 text-xl  space-x-2"><FaKey size="1.3rem"/><a href='#'>Login</a></span>
                <span className=" cursor-pointer flex flex-row text-white font-mono hover:text-orange-500 transition ease-in-out duration-300 text-xl  space-x-2"><FaIdBadge size="1.3rem"/><a href='/signup'>SignUp</a></span>
            </nav>

            <div className='text-slate-300 font-mono sm:text-3xl lg:text-3xl xl:text-4xl font-bold my-24 justify-center max-w-fit mx-auto'>Hey, Welcome Back, let's Login</div>

            <div className=" border-slate-600 border-solid border-4 w-fit h-50  mx-auto p-4 space-x-4 space-y-8 bg-slate-950/75 shadow-2xl  flex flex-col px-16 py-6 rounded-xl">
                <div className='space-x-4 space-y-4 mx-2 px-14'>
                    <label htmlFor='email' className='text-slate-500 font-mono'>Email</label>
                    <input name='email' className='text-sky-600 bg-slate-500/50 focus:ring-sky-500 focus:ring-2 focus:outline-none focus:shadow-2xl focus:bg-slate-600/50 rounded-md px-2 w-60 font-medium'></input>
                </div>

                <div className='space-x-4 px-12'>
                    <label htmlFor='pass' className='text-slate-500 font-mono '>Password</label>
                    <input type= 'password'name='pass' className='text-sky-600 bg-slate-500/50 focus:ring-sky-500 focus:ring-2 focus:outline-none  focus:shadow-2xl focus:bg-slate-600/50 rounded-md px-2 w-2/3 font-extrabold text-md'></input>
                </div>

                <div className='justify-center flex flex-row'><button className='transition duration-300 text-slate-300 bg-slate-600 focus:bg-red-400/50 max-w-fit p-1 px-4 font-semibold  rounded-md hover:ring-red-500 hover:ring-2'>Login</button></div>
                


            </div>





        </div>





    )

    
};
