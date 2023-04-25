import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import './../index.css'
import { FaHome, FaKey, FaIdBadge, FaQuestion } from 'react-icons/fa';

export default function ProbTemp() {

    const problems = [{
        id: 101,
        title: "Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "42%"
    },{
        id: 102,
        title: "Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "412%"
    },
        {
            id: 103,
            title: "Happy Number",
            difficulty: "Easy",
            acceptance: "54.9%"
        },
        {
            id: 104,
            title: "Remove Linked List Elements",
            difficulty: "Hard",
            acceptance: "42%"
        },
        {
            id: 105,
            title: "Pallindrome efficient",
            difficulty: "Easy",
            acceptance: "88%"
        }
    ];

    let {id} = useParams();

    const d = problems.find(function hello(elem){return elem.id == id} ) 

    

    





    

    return (
        <div className='bg-slate-800 h-screen w-screen mx-auto'>
        <nav className='flex flex-row justify-center place-items-center w-full h-8 transition ease-in-out duration-300 bg-slate-900/40 hover:bg-slate-900/25 mx-auto shadow-2xl shadow-sky-400/75 space-x-20'>
            <span className="  cursor-pointer flex flex-row text-white hover:text-red-500 font-mono text-xl space-x-2 "><FaHome size="1.5rem" /><a href='/'>Home</a></span>
            <span className=" cursor-pointer flex flex-row text-white hover:text-green-500 font-mono  transition ease-in-out duration-300 text-xl  space-x-2"><FaKey size="1.3rem"/><a href='/login'>Login</a></span>
            <span className=" cursor-pointer flex flex-row text-white hover:text-orange-500 font-mono transition ease-in-out duration-300 text-xl  space-x-2"><FaIdBadge size="1.3rem"/><a href='/signup'>SignUp</a></span>
            <span className=" cursor-pointer flex flex-row text-purple-500 font-mono  transition ease-in-out duration-300 text-xl  space-x-1"><FaQuestion size="1.4rem"/><a href='/problems/all'>Problems</a></span>
        </nav>

        <div className='my-20 text-slate-400  mx-8 p-4 border-2 border-purple-500'>
            <h1 className='font-bold text-4xl'>Problem #{d.id}</h1>
            <h2 className='font-bold text-xl text-purple-400/75'>{d.title}</h2>
            <div className='flex flex-row'>

            <label className='basis-1/2 my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tenetur porro ad quos deleniti corporis facere, cumque doloribus inventore quibusdam. Eligendi perferendis saepe eos delectus deserunt cumque quaerat incidunt illum?</label>
            <div className='basis-1/2 mr-4 mx-4'>
                <label htmlFor='lang' className='ml-4'>Choose your language: </label>
                <select name="lang" className='bg-purple-400/50 text-slate-100 p-1 rounded-md cursor-pointer' >
                    <option value="js">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                </select>


            <textarea placeholder='Start your code here.....' className='bg-purple-400/40 rounded-xl mt-10 h-64 p-4 mx-4  text-slate-100 w-full'></textarea>
            <div className='mx-4'>
                <button className='my-4  transition duration-300 text-slate-300 bg-slate-600 focus:bg-blue-400/50 max-w-fit p-1 px-4 font-semibold  rounded-md hover:ring-blue-500 hover:ring-2'>Test Run</button>
                <button className='my-4  mx-4 transition duration-300 text-slate-300 bg-slate-600 focus:bg-red-400/50 max-w-fit p-1 px-4 font-semibold  rounded-md hover:ring-red-500 hover:ring-2'>Submit </button>

            </div>
            


            </div>
            



            </div>
            
           





        </div>

        </div>

        







    )

    
};
