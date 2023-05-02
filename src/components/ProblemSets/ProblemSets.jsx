import { Link } from "react-router-dom";

    const ProblemSets =(props)=> {
        const title = props.title;
        const acceptance = props.acceptance;
        const difficulty = props.difficulty;
    

        return (
            <div className="problemsets-container">
                <tr>
                    <th>Title</th>
                    <th>Difficulty</th>
                    <th>Acceptance</th>
                </tr>
               {props.problems.map((problem,index) => (
                <tr key={index}>
                    <Link to={`/problems/${problem.title}/`}>
                    <td>{problem.title}</td></Link>
                    <td>{problem.acceptance}</td>
                    <td>{problem.difficulty}</td>
                </tr>
                ))}
            </div>
        )
    }

    export default ProblemSets;