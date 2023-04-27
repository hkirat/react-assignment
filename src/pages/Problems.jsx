import React from 'react'
import { Link } from 'react-router-dom';


export default function Problems(props) {
    
    const [problem, setProblem] = React.useState(problems1);
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;



    return (
        <div>
            <h1 className='flex  justify-center text-4xl font-semibold capitalize px-10 pt-10 pb-4'>
                problems
            </h1>
            <div className='flex justify-center px-10'>
                <div className='capitalize p-2'>
                    <button className='border border-black p-1 rounded' onClick={() => setProblem(problems1)}>1</button>
                </div>
                <div className='capitalize p-2'>
                    <button className='border border-black p-1 rounded' onClick={() => setProblem(problems2)}>2</button>
                </div>
            </div>
            <div className='flex  justify-center px-10 py-4'>
                <div className='border border-black rounded p-8' >
                    {problem.map((problem) => {
                        return <ProblemStatement id={problem.id} title={problem.title} acceptance={problem.acceptance} difficulty={problem.difficulty}/>
                    })}
                </div>
                
            </div>
        </div>
    )
}
function ProblemStatement(props) {
    const id = props.id;
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;

    return (
        <>
        <div className='p-4 '>
            <div className='flex'>
                <div>
                    {title}
                </div> 
            </div>
            <div className='flex'>
                <div>
                    {acceptance}
                </div> 
            </div>
            <div className='flex'>
                <div>
                    {difficulty}
                </div> 
            </div>
            <div className='py-2'>
                <Link to={`/problems/${id}`}
                    class="border border-black rounded py-1 px-3 hover:bg-black hover:text-white"
                >submit
                </Link>
            </div>
        </div>
            
        </>
        
        
    )
}
const problems1 = [{
        id: 1,
        title: "201. Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "42%"
    },{
        id: 2,
        title: "201. Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "412%"
    },
    {
        id: 3,
        title: "202. Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%"
    },
    {
        id: 4,
        title: "203. Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%"
    }];

const problems2 = [{
        id: 1,
        title: "301. Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "42%"
    },{
        id: 2,
        title: "301. Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "412%"
    },
        {
            id: 3,
            title: "302. Happy Number",
            difficulty: "Easy",
            acceptance: "54.9%"
        },
        {
            id: 4,
            title: "303. Remove Linked List Elements",
            difficulty: "Hard",
            acceptance: "42%"
        }];