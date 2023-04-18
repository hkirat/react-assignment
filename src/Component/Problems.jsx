import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Problems.css";

export default function Problems({ problems }) {
  return (
    <div className="container">
      <h1>All Problems</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Acceptance Rate</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <tr key={problem.id}>
              <td style={{ cursor: "pointer" }}>
                <Link to={`/problem/${problem.id}`}>{problem.title}</Link>
              </td>
              <td>{problem.acceptanceRate}</td>
              <td
                style={{
                  color:
                    problem.difficulty === "Easy"
                      ? "green"
                      : problem.difficulty === "Medium"
                      ? "Blue"
                      : "red",
                }}
              >
                {problem.difficulty}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
