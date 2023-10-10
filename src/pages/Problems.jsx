import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Problems = (props) => {
  const [problems, setProblems] = useState([]);
  const [problemColor, setProblemColor] = useState();
  const { setProblemId } = props;

  const init = async () => {
    const response = await fetch('http://localhost:3000/questions', {
      method: 'GET',
    });

    const json = await response.json();
    setProblems(json.problems);
  };

  const handleProblemClick = (id) => {
    console.log(`Clicked problem with ID: ${id}`);
    if (id) {
      setProblemId(id);
    }
    console.log(id);
  };

  const difficultyColor = (value) => {
    if (value === 'Easy') {
      return 'text-success';
    } else if (value === 'Medium') {
      return 'text-warning';
    } else return 'text-danger';
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th className="col">ID</th>
            <th className="col">TITLE</th>
            <th className="col">ACCEPTANCE RATE</th>
            <th className="col">DIFFICULTY</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem, index) => (
            <tr key={problem.id}>
              <th>{problem.id}</th>
              <td>
                <Link
                  to={`/problem/:${problem.id}`}
                  onClick={() => handleProblemClick(problem.id)}
                  className="nav-link"
                >
                  {problem.title}
                </Link>
              </td>
              <td>{problem.acceptanceRate}</td>
              <td className={`${difficultyColor(problem.difficulty)}`}>
                {problem.difficulty}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Problems;
