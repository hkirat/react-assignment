const problems =
    [
        {
            id:'201.',
            title: " Bitwise AND of Numbers Range",
            difficulty: "Medium",
            acceptance: "42%"
        },
        {
            id:'202.',
            title: "Happy Number",
            difficulty: "Easy",
            acceptance: "54.9%"
        },
        {
            id:'203.',
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
        function changeColor(difficulty){
            if(difficulty==='Hard'){
                return {color: 'red'};
            }
            else if(difficulty==='Medium'){
                return {color: 'orange'};
            }
            else{
                return {color: 'green'}
            }
        }
        const id = props.id;
        const title = props.title;
        const acceptance = props.acceptance;
        const difficulty = props.difficulty;
        return (
            <tr>
                <td scope="row">
                    {id}
                </td>
                <td>
                    {title}
                </td>
                <td>
                    {acceptance}
                </td>
                <td style={changeColor(difficulty)}>
                    {difficulty}
                </td>
            </tr>
        )
    }
    export default Problems;