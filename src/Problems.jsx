import React, { useState } from 'react';
import './css/problems.css';
import { Link } from 'react-router-dom';
import problems from './data/Problems';

const problems1 = problems.problems1;
const problems2 = problems.problems2;

const ProblemList = () => {
  const [problems, setProblems] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleClick = (problemList) => {
    setProblems(problemList);
    setShowTable(true);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleClick(problems1)}>1</button>
        <button onClick={() => handleClick(problems2)}>2</button>
      </div>
      {showTable && (
        <table className="problem-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Difficulty</th>
              <th>Acceptance</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem) => (
              <RenderProblems
                key={problem.title}
                title={problem.title}
                acceptance={problem.acceptance}
                difficulty={problem.difficulty}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

function RenderProblems(props) {
  const { title, difficulty, acceptance } = props;

  const difficultyColor =
    difficulty === 'easy'
      ? 'green'
      : difficulty === 'medium'
      ? 'orange'
      : 'red';

  const difficultyStyle = {
    color: difficultyColor
  };

  return (
    <tr>
      <td>
        <Link to={`/problems/${encodeURIComponent(title)}`}>{title}</Link>
      </td>
      <td style={difficultyStyle}>{difficulty}</td>
      <td>{acceptance}</td>
    </tr>
  );
}

export default ProblemList;
