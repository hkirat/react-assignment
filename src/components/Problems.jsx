import {Link} from "react-router-dom";

const problems =
    [
        {
            id:'201',
            title: " Bitwise AND of Numbers Range",
            difficulty: "Medium",
            acceptance: "42%"
        },
        {
            id:'202',
            title: "Happy Number",
            difficulty: "Easy",
            acceptance: "54.9%"
        },
        {
            id:'203',
            title: "Remove Linked List Elements",
            difficulty: "Hard",
            acceptance: "42%"
        }
    ];

    function Problems(){
        return <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Acceptance</th>
                    <th scope="col">Difficulty</th>
                </tr>
            </thead>
                {
                    problems.map(problem => <ProblemStatement
                        id={problem.id}
                        title={problem.title}
                        acceptance={problem.acceptance}
                        difficulty={problem.difficulty}
                    />)
                }
        </table>
    }
    function ProblemStatement(props) {
        const id = props.id;
        const title = props.title;
        const acceptance = props.acceptance;
        const difficulty = props.difficulty;
        function difficultyColor(difficulty){
            if(difficulty === 'Hard'){
                return 'red';
            }
            else if(difficulty ==='Medium'){
                return 'orange';
            }
            else return 'green';
        }
        return (
            <tr>
                <td scope="row">
                    <Link to={`/problems/${id}`} style={{ textDecoration: 'none', color: '#212529' }}>
                    {id}
                    </Link>
                </td>
                <td>
                    <Link to={`/problems/${id}`} style={{ textDecoration: 'none', color: '#212529' }}>
                    {title}
                    </Link>
                </td>
                <td>
                    <Link to={`/problems/${id}`} style={{ textDecoration: 'none', color: '#212529' }}>
                    {acceptance}
                    </Link>
                </td>
                <td>
                    <Link to={`problems/${id}`} style={{ textDecoration: 'none', color: difficultyColor(difficulty) }}>
                    {difficulty}
                    </Link>
                </td>
            </tr>
        )
    }
    export default Problems;