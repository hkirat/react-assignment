import { useParams, NavLink } from "react-router";

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

function Problem() {
    const {problem_slug} = useParams();
    const problem = problems.find(problem => +problem.id === +problem_slug);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Difficulty</th>
                        <th>Acceptance</th>
                    </tr>
                    <tr>
                        <td>{problem.title}</td>
                        <td>{problem.difficulty}</td>
                        <td>{problem.acceptance}</td>
                    </tr>
                </thead>
            </table>
            <NavLink to="/problemset/all" className={({isActive}) => isActive ? "active": ""} >Show all problems</NavLink>
        </>
    )
}

export default Problem;