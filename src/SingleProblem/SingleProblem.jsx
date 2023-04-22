import './SingleProblem.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SingleProblemPage({ problems }) {
  const { problem_slug } = useParams();
  const [currentProblem, setCurrentProblem] = useState({});

  useEffect(() => {
    // Fetch problem data using problem_slug
    // and update the state with the problem data
    problems.forEach((v) => {
      if(v.id == problem_slug){
        setCurrentProblem(v);
      }
    })
  }, [problem_slug]);

  const { title, difficulty, acceptance } = currentProblem;

  return (
    <div className="single-problem-container">
      <div>
        <a href="/">Home</a>
      </div>
      <h2>{title}</h2>
      <span className="difficulty">{difficulty}</span>
      <span className="acceptance">Accepted: {acceptance}</span>
    </div>
  );
}

export default SingleProblemPage;
