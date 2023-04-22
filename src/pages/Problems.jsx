// demo array
const problems = [{
    id: 1,
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
},{
    id:2,
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "412%"
},
    {
        id:3,
        title: "202. Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%"
    },
    {
        id:4,
        title: "203. Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%"
    }];


export default function Problems(props) {
    const id = props.id;
    const title = props.title;
    const difficulty = props.difficulty;
    const acceptance = props.acceptance;

    return (
        <table className={"w-full border-2"}>
            <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>difficulty</th>
                <th>acceptance</th>
            </tr>
            </thead>
            <tbody className={"text-center"}>
            {problems.map((problem) => (
                <tr key={problem.id}>
                    <td>{problem.id}</td>
                    <td><a href={"#"}>{problem.title}</a></td>
                    <td className={`problem-${problem.difficulty}`}>{problem.difficulty}</td>
                    <td>{problem.acceptance}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
