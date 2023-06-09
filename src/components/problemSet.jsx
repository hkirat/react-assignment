import problems from '../problemList.js'
import {BrowserRouter, Route} from "react-router-dom";
import {useState} from "react";
import Problem from "./problem.jsx";

function ProblemSet() {
    const [problem, setProblem] = useState()

    function populateProblemSet() {
        console.log(problems, problem)

        function handleProblemSelection(problem) {
            console.log("Inside problemSet", problem)
            setProblem(problem)
        }

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
                        <tr key={problem.id} onClick={() => handleProblemSelection(problem)}>
                            <td>{problem.title}</td>
                            <td className={problem.difficulty.toLowerCase()}>{problem.difficulty}</td>
                            <td>{Math.round(problem.accepted / problem.submitted * 100)}%</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }

    function renderProblem() {
        console.log("State", problem)
        if (problem) {
            // const problem = problem
            return (
                // <BrowserRouter>
                //     <Route exact path="/problem/:id" children={<Problem title={problem.title}
                //                                                         difficulty={problem.difficulty}
                //                                                         acceptance={problem.acceptance} />} />
                // </BrowserRouter>
                <Problem id={problem.id}
                    title={problem.title}
                         difficulty={problem.difficulty}
                         accepted={problem.accepted}
                         submitted={problem.submitted}
                         description={problem.description}
                         examples={problem.examples}
                         constraints={problem.constraints}/>
            )
        }
    }

    return (
        <div className="problem-set-screen">
            Problem Set
            <div>{populateProblemSet()}</div>
            {renderProblem()}
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