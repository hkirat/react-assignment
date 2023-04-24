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

        <div className='my-20 text-slate-400  mx-8 border-2 border-purple-500'>
            <h1 className='font-bold text-4xl'>Problem #{d.id}</h1>
            <h2 className='font-bold text-xl'>{d.title}</h2>
           





        </div>

        </div>

        







    )

    
};
