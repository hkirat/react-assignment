import React from "react";
import "./index.css";

function Problem(props) {
  const { slug } = props.match.params;
  const problem = problems.find(problem => problem.slug === slug);

  if (!problem) {
    return <div>Problem not found.</div>;
  }

  return (
    <div className="problem-container">
      <h1 className="problem-title">{problem.title}</h1>
      <div className="problem-info">
        <p>Difficulty: {problem.difficulty}</p>
        <p>Acceptance: {problem.acceptance}</p>
      </div>
      <div className="problem-description">
        <h2>Description</h2>
        <p>
          Given an array <code>[1,2,3,4,5]</code>, return the maximum of the array.
        </p>
      </div>
      <div className="problem-test-cases">
        <h2>Test Cases</h2>
        <table>
          <thead>
            <tr>
              <th>Input</th>
              <th>Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>[1,2,3,4,5]</code>
              </td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Problem;