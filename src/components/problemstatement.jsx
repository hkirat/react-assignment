import PROBLEMS from './data/problems.json';

function ProblemStatement() {

    return (
        <div>
            <div><h1>All Problemset</h1></div>
            <table>
                <thead>
                    <tr>
                        <th>Problem ID</th>
                        <th>Problem Title</th>
                        <th>Difficulty</th>
                        <th>Acceptance Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {PROBLEMS.map((problem,id) => (
                        <tr key={id}>
                            <td>{problem.index}</td>
                            <td><a href={`/problems/${problem.id}`}>{problem.title}</a></td>
                            <td>{problem.difficulty}</td>
                            <td>{problem.acceptance}</td>
                        </tr>
                    ),[])}
                </tbody>
            </table>
            
        </div>
    )
}
export default ProblemStatement;