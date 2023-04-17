import React from "react";
import { Link } from "react-router-dom";

const AllProblems = ({ problems }) => {
  return (
    <>
      <table>
        <tbody>
          <tr className="table__header">
            <th>Title</th>
            <th>Difficulty</th>
            <th>Acceptance</th>
          </tr>
          {problems.map((problem) => (
            <tr key={problem.problemId}>
              <Link to={`/problems/${problem.problemId}`}>
                <td>
                  {problem.problemId}.{problem.title}
                </td>
              </Link>
              <td className={problem.difficulty}>{problem.difficulty}</td>
              <td>{problem.acceptance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AllProblems;
