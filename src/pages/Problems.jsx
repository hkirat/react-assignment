import {useState} from "react";

// demo array
const problems1 = [{
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

// demo array
const problems2 = [{
    id: 5,
    title: "Auto Complete Suggestions",
    difficulty: "Medium",
    acceptance: "12%"
},{
    id:6,
    title: "Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "63%"
},
    {
        id:7,
        title: "Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%"
    },
    {
        id:8,
        title: "Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%"
    }];
const problems3 = [{
    id: 9,
    title: "Auto Complete Suggestions",
    difficulty: "Easy",
    acceptance: "12%"
},{
    id:10,
    title: "Bitwise AND of Numbers Range",
    difficulty: "Hard",
    acceptance: "63%"
},
    {
        id:11,
        title: "Happy Number",
        difficulty: "Medium",
        acceptance: "54.9%"
    },
    {
        id:12,
        title: "Remove Linked List Elements",
        difficulty: "Easy",
        acceptance: "42%"
    }];




export default function Problems(props) {
    const [problems, setProblems] = useState(problems1);
    const id = props.id;
    const title = props.title;
    const difficulty = props.difficulty;
    const acceptance = props.acceptance;
    return (
        <div className={"flex-col align-center text-center space-y-4"}>
        <table className={"w-4/5 mx-auto my-4"}>
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
            <div className={"btn-group"}>
                <button className={"btn"} onClick={() => {
                    setProblems(problems => problems1)
                    clasName
                }}>0</button>
                <button className={"btn"} onClick={() => {
                setProblems(problems => problems2)
                clasName
            }}>1</button>
            <button className={"btn"} onClick={() => {
                setProblems(problems => problems3)
            }}>2</button>
            </div>
        </div>
    )
}
