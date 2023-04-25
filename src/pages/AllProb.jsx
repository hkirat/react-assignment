import './../index.css'
import { FaHome, FaKey, FaIdBadge, FaQuestion } from 'react-icons/fa';

export default function AllProb() {

    /*
 * Temporary problems array schema
 */
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

    function Color(diff){
        if(diff==='Easy') {
            return 'bg-green-500/50'
        }
        else if(diff==='Medium'){
            return 'bg-orange-500/50'
        }
        else{
            return 'bg-red-500/50'
        }
    }

    function ProblemStatement(props) {
        const title = props.title;
        const acceptance = props.acceptance;
        const difficulty = props.difficulty;
        const id = props.id;
        const txt = '/problems/id/'+id
        
        

    
        return <div className='p-0.5'>

                <tr className={Color(difficulty)}>
                    <td className='w-32 justify-center inline-flex'>
                        {id}
                    </td>
                    <td className='w-60 justify-center inline-flex'>
                        <a href={txt}>{title}</a>
                    </td>
                <td className='w-32 justify-center inline-flex'>
                {acceptance}
            </td>
            <td className='w-32 justify-center inline-flex'>
                {difficulty}
            </td>
        </tr>


           

            
        
        
        
                


        </div>
        
        
    }




    return (
        <div className='bg-slate-800 h-screen w-screen mx-auto'>
        <nav className='flex flex-row justify-center place-items-center w-full h-8 transition ease-in-out duration-300 bg-slate-900/40 hover:bg-slate-900/25 mx-auto shadow-2xl shadow-sky-400/75 space-x-20'>
            <span className="  cursor-pointer flex flex-row text-white hover:text-red-500 font-mono text-xl space-x-2 "><FaHome size="1.5rem" /><a href='/'>Home</a></span>
            <span className=" cursor-pointer flex flex-row text-white hover:text-green-500 font-mono  transition ease-in-out duration-300 text-xl  space-x-2"><FaKey size="1.3rem"/><a href='/login'>Login</a></span>
            <span className=" cursor-pointer flex flex-row text-white hover:text-orange-500 font-mono transition ease-in-out duration-300 text-xl  space-x-2"><FaIdBadge size="1.3rem"/><a href='/signup'>SignUp</a></span>
            <span className=" cursor-pointer flex flex-row text-purple-500 font-mono  transition ease-in-out duration-300 text-xl  space-x-1"><FaQuestion size="1.4rem"/><a href='#'>Problems</a></span>
        </nav>

        <div className='flex flex-col my-20 place-items-start max-w-fit mx-auto text-slate-300 '>
        <table>
        <thead >
            <tr className='bg-slate-600/50'>
                <th className='w-32 justify-center inline-flex border border-collapse border-slate-400'>
                    S No.
                </th>
                <th className='w-60 justify-center inline-flex border border-collapse border-slate-400'>
                    Problem
                </th>
                <th className='w-32 justify-center inline-flex border border-collapse border-slate-400'>
                    Acceptance
                </th>
                <th className='w-32 justify-center inline-flex border border-collapse border-slate-400'>
                    Difficulty
                </th>
            </tr>
            </thead>
            </table>
            {problems.map(prob => <ProblemStatement id={prob.id} title={prob.title} acceptance={prob.acceptance} difficulty={prob.difficulty} /> )}



            


        </div>




    
    
    
    
    
    </div>

    )

    
};
