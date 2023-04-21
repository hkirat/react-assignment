import React, { useState } from "react";
import { Link } from "react-router-dom";
import problems from "./ProblemsList";

import "./Problems.css";

export default function Problems(props) {
  const { firstName } = props.signUpDetails;

  // console.log(firstName);

  return (
    <div>
      <nav>
        <ul>
          {!props.isLoggedIn ? (
            <li>
              <a href="/login">Sign In</a>
            </li>
          ) : (
            <li>
              <a href="/logout">Logout</a>
            </li>
          )}

          {/* <li>
            <a href="/logout">Logout</a>
          </li> */}

          {props.isLoggedIn ? (
            <h4 className="h4">Welcome: {firstName}</h4>
          ) : (
            " "
          )}
        </ul>
      </nav>

      <div className="container">
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
    </div>
  );
}
