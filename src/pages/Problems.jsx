// demo array
const problems = [{
    id: 1,
    title: "Auto Complete Suggestions",
    difficulty: "Medium",
    acceptance: "12%"
},{
    id:2,
    title: "Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "63%"
},
    {
        id:3,
        title: "Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%"
    },
    {
        id:4,
        title: "Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%"
    }];


export default function Problems(props) {
    const id = props.id;
    const title = props.title;
    const difficulty = props.difficulty;
    const acceptance = props.acceptance;
    return (
        <table className={"w-full items-center"}>
            <thead>
            <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>DIFFICULTY</th>
                <th>ACCEPTANCE</th>
            </tr>
            </thead>
            <tbody className={"text-center"}>
            {problems.map((problem) => (
                <tr
                    key={problem.id}
                    className={problem.id % 2 === 0 ? "bg-slate-200 text-slate-800" : "bg-zinc-800 text-slate-300"}>
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
