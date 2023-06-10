import problems from '../problemList.js'
import {Link} from "react-router-dom";

function ProblemSet() {

    function populateProblemSet() {
        return (
            <table>
                <thead>
                <tr>
                    <td>Problem Title</td>
                    <td>Difficulty</td>
                    <td>Acceptance</td>
                </tr>
                </thead>
                <tbody>
                {problems.map(problem => {
                    return (
                        <Link to={`/problem/${problem.id}`} key={problem.id} className="table-row">
                            <td>{problem.title}</td>
                            <td className={problem.difficulty.toLowerCase()}>{problem.difficulty}</td>
                            <td>{Math.round(problem.accepted / problem.submitted * 100)}%</td>
                        </Link>
                    )
                })}
                </tbody>
            </table>
        )
    }

    return (
        <div className="problem-set-screen">
            Problem Set
            <div>{populateProblemSet()}</div>
        </div>
    )
}

// A demo component
function ProblemStatement(props) {
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;

    return <tr>
        <td>
            {title}
        </td>
        <td>
            {acceptance}
        </td>
        <td>
            {difficulty}
        </td>
    </tr>
}

export default ProblemSet