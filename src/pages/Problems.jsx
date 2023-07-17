import { Link } from "react-router-dom";
import Problem from "../components/Problem";
import { useEffect, useState } from "react";


function Problems() {
  const [problems, setProblems] = useState([]);
  
  useEffect(() => {
    async function getProblemSet(){
      const response = await fetch("http://127.0.0.1:3001/questions");
      const problemSet = await response.json();

      console.log(problemSet);
      setProblems(problemSet.questions);
    }

    getProblemSet();
  }, [])

  return (
    <section>
      {problems.map((problem) => (
        <Link
          to={`/problems/${problem.id}`}
          className="problemLink"
          key={problem.id}>
          <Problem
            id={problem.id}
            title={problem.title}
            difficulty={problem.difficulty}
            acceptance={problem.acceptance}
          />
        </Link>
      ))}
    </section>
  );
}

// A demo component
function ProblemStatement(props) {
  const title = props.title;
  const acceptance = props.acceptance;
  const difficulty = props.difficulty;

  return (
    <tr>
      <td>{title}</td>
      <td>{acceptance}</td>
      <td>{difficulty}</td>
    </tr>
  );
}

export default Problems;
