import React from "react";
import { Link } from "react-router-dom";

const AllProblemsPage = ({ problems }) => {
  return (
    <div id="allproblems" className="h-[90vh]">
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Acceptance</th>
          </tr>

          {problems.map((prob, index) => (
            <tr key={index}>
              {console.log(prob, "hello")}
              <Link to={`/problems/${prob.title}/`}>
                <td>{prob.title}</td>
              </Link>
              <td className={`${prob.difficulty}`}>{prob.difficulty}</td>
              <td className={`${prob.difficulty}`}>{prob.acceptance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProblemsPage;
