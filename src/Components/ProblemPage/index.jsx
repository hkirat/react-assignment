import {Link} from 'react-router-dom'

import './index.css'


const problems = [{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",ID:1
    },
    {
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "41.2%",ID:2
    },
    {
        title: "202. Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%",ID:3
    },
    {
        title: "203. Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%",ID:4
    }];

    const ProblemPage = () => {
     return(
        <>
        <h1>Problems to Get Started</h1>
        <ul>
            {
                problems.map((eachProblem)=>(
                    <Link to={`/problems/${eachProblem.ID}`} className='link'>
                    <li key={eachProblem.ID}>
                        <p className='list-para1'>{eachProblem.title}</p>
                        <p className='list-para2'>{eachProblem.difficulty}</p>
                        <p className='list-para3'>{eachProblem.acceptance}</p>
                    </li>
                    </Link>
                ))
            }
        </ul>
        </>
     )   
    }

    export default ProblemPage


