import { NavLink } from "react-router";

const problems = [{
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

function Problems() {
    return (
    <>
        <ul>
            {problems.map(problem => 
            <li key={problem.id}>      
                {problem.title} - {problem.difficulty} - {problem.acceptance}
                <NavLink to={`/problems/${problem.id}`} key={problem.id} className={({isActive}) => isActive? "active": ""}>Click</NavLink>
            </li>            
            )
        }
        </ul>
    </>
    )
}

export default Problems;