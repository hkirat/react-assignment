import React, { useState, useEffect } from 'react';
import '../styles/Problems.css';
import { Link } from 'react-router-dom';

const Problems = ({ problems }) => {
  const [problemsData, setProblemsData] = useState(problems);

  useEffect(() => {
    setProblemsData(problems);
  }, [problems]);
  return (
    <div className="problems-container">
      <h3 className="h33">All Problems</h3>
      <table className="problems-table">
        <thead>
          <tr>
            <th>Link</th>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Acceptance</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem, index) => (
            <tr key={index}>
              <Link to={`/problems/${problem.name}`}>Go to Problem</Link>
              <td>{problem.title}</td>
              <td>{problem.difficulty}</td>
              <td>{problem.acceptance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Problems;
