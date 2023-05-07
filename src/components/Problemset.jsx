import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Problemset.css";

const problems1 = [
  {
    title: "Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
  },
  {
    title: "Bitwise OR of Numbers Range",
    difficulty: "Medium",
    acceptance: "412%",
  },
  {
    title: "Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%",
  },
  {
    title: "Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%",
  },
];

const problems2 = [
  {
    title: "Two Sum",
    difficulty: "Easy",
    acceptance: "42%",
  },
  {
    title: "Add Two Numbers",
    difficulty: "Medium",
    acceptance: "41.2%",
  },
  {
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    acceptance: "31.2%",
  },
  {
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    acceptance: "32%",
  },
];

export default function Problemset() {
  const [problems, setProblems] = useState(problems1);
  return (
    <>
    <div className="problems-container">
    <h1 className="problem-heading">Problems</h1>
      <div className="btn-div">
        <button
          onClick={() => setProblems((problems) => problems1)}
        >
          1
        </button>
        <button
          onClick={() => setProblems((problems) =>  problems2)}
        >
          2
        </button>
      </div>
      <div className="problem-div">
        {problems.map((problem,index) => addProblems(problem,index))}
      </div>
    </div>
      
    </>
  );
}

function addProblems(props,index) {
  return (
    <table key={index}>
      <tbody>
        <tr>
          <td>
            <Link to={`/Problem/${props.title}`}>{props.title}</Link>
          </td>
          <td>{props.difficulty}</td>
          <td>{props.acceptance}</td>
        </tr>
      </tbody>
    </table>
  );
}