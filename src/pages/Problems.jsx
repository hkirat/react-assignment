import React from 'react'
import { Link } from 'react-router-dom';



export default function Problems(props) {
    const [problem, setProblem] = React.useState(problems1);
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;

    return (
        <div>
            <h1 className='capitalize px-10 pt-10'>
                problems: 
                <Link className='px-4 text-xl' to={"/"}> back</Link>
            </h1>
            <div className='flex px-10'>
                <div className='capitalize p-2'>
                    <button className='border border-black p-1 rounded' onClick={() => setProblem(problems1)}>1</button>
                </div>
                <div className='capitalize p-2'>
                    <button className='border border-black p-1 rounded' onClick={() => setProblem(problems2)}>2</button>
                </div>
            </div>
            <div className='px-10'>
                {problem.map((problem) => {
                    return <ProblemStatement title={problem.title} acceptance={problem.acceptance} difficulty={problem.difficulty}/>
                })}
            </div>
        </div>
    )
}
function ProblemStatement(props) {
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;

    return (
        <>
        <div className='p-4'>
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
        </div>
            
        </>
        
        
    )
}
const problems1 = [{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
},{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "412%"
},
    {
        title: "202. Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%"
    },
    {
        title: "203. Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%"
    }];

const problems2 = [{
        title: "301. Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "42%"
    },{
        title: "301. Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "412%"
    },
        {
            title: "302. Happy Number",
            difficulty: "Easy",
            acceptance: "54.9%"
        },
        {
            title: "303. Remove Linked List Elements",
            difficulty: "Hard",
            acceptance: "42%"
        }];