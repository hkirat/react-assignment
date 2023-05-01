import React from 'react'
import './Problems.css'
import { Link } from 'react-router-dom';
const problems = [{
    number: "1",
    title: "Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
},
 {
        number: "2",
        title: "Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%"
    },

    {
        number: "3",
        title: "Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%"
    },
    {
        number: "4",
        title: "Next Greater Element",
        difficulty: "Medium",
        acceptance: "30%"
    },
    {
        number: "5",
        title: "Detect a cycle in the linkedlist",
        difficulty: "Medium",
        acceptance: "60%"
    },
    {
        number: "6",
        title: "Create a clone of a graph",
        difficulty: "Hard",
        acceptance: "30%"
    },
    {
        number: "7",
        title: "2 Sum",
        difficulty: "Easy",
        acceptance: "80%"
    },
    {
        number: "8",
        title: "Longest Increasing Subsequence",
        difficulty: "Medium",
        acceptance: "50%"
    },
    {
        number: "9",
        title: "Inverse Element",
        difficulty: "Hard",
        acceptance: "42%"
    },
    {
        number: "10",
        title: "Maximum of Minimum of every window size",
        difficulty: "Hard",
        acceptance: "%"
    }];


function Problems() {
  return (
    <div className="problems">
        <table className="problems-table" cellPadding={0} cellSpacing={0}>
            <thead>
            <tr id="header-row">
                <th className="number">#</th>
                <th className="title">Title</th>
                <th className="acceptance">Acceptance</th>
                <th className="difficulty">Difficulty</th>
            </tr>
            </thead>
            <tbody>
            {
                problems.map((problem)=> <ProblemStatement key={problem.title} number={problem.number} title={problem.title} acceptance={problem.acceptance} difficulty={problem.difficulty}/>)
            }
            </tbody>
           
        </table>
    </div>
  )
}
function ProblemStatement(props) {
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;
    const number = props.number;
    return <tr>
        <td className="number">
            {number}
        </td>
        <td className="title title-text">
            <Link style={{textDecoration:"none"}}to={`/problems/?id=${number}`}>{title}</Link>
        </td>
        <td className="acceptance">
            {acceptance}
        </td>
        <td className="difficulty1">
            <div className="diff" style={{backgroundColor: (difficulty === "Easy") &&  "#6EC974" || difficulty === "Medium" && "#FDA61F"
                                                            || difficulty === "Hard" && "#FD6457"}}>{difficulty}</div>
        </td>
    </tr>
}
export default Problems