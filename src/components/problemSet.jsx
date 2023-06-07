import problems from '../problemList.js'

function ProblemSet(){

    function populateProblemSet() {
        console.log(problems)

        function handleProblemSelection(problem) {
            console.log(problem)
        }

        return(
            // problems.map(problem => {
            //     return (
            //         <div key={problem.id}>
            //             {problem.title}
            //         </div>
            //     )
            // })
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
                        <tr key = {problem.id} onClick={() => handleProblemSelection(problem)}>
                           <td>{problem.title}</td>
                            <td className={problem.difficulty.toLowerCase()}>{problem.difficulty}</td>
                            <td>{problem.acceptance}</td>
                        </tr>
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