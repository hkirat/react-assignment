import React from "react";
import problems from "./problems.json";
import "./Problems.css";
import { Link } from "react-router-dom";

export default function Problems() {
  return (
    <table>
      <thead>
        <tr>
          <th>Problem</th>
          <th>Difficulty</th>
          <th>Acceptance Rate</th>
        </tr>
      </thead>
      <tbody>
        {problems.map((problem) => (
          <tr key={problem.id}>
            <td>
              <Link to={`/problemDetails/${problem.id}`}>{problem.title}</Link>
            </td>
            <td>{problem.difficulty.level}</td>
            <td>{problem.total_acs / problem.total_submitted}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
