import { Link } from "react-router-dom";
import Problem from "../components/Problem";

/*
 * Temporary problems array schema
 */
const problems = [
  { 
    id: 201,
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
  },
  { 
    id: 202,
    title: "202. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%",
  },
  { 
    id: 203,
    title: "203. Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%",
  },
];

function Problems() {
  return (
    <section>
      {problems.map((problem) => (
        <Link to={`/problems/${problem.id}`} className="problemLink">
          <Problem
            key={problem.id}
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
