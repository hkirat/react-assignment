import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import problemlist from '../data';
import ProblemDetails from './ProblemDetails';

const Problems = () => {
  const [problems, setProblems] = useState([]);

  const init = async () => {
    const response = await fetch('http://localhost:3000/questions', {
      method: 'GET',
    });

    const json = await response.json();
    setProblems(json.problems);
  };

  useEffect(() => {
    init();
    console.log(problems);
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>ACCEPTANCE RATE</th>
            <th>DIFFICULTY</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem, index) => (
            <tr key={problem.id}>
              <td>{problem.id}</td>
              <td>
                <Link to={`/problem/:${problem.id}`}>{problem.title}</Link>
              </td>
              <td>{problem.acceptanceRate}</td>
              <td>{problem.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Problems;
