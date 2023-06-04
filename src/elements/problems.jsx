import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./problems.css";

function Problems() {
  const [problems, setProblems] = useState([]);

  const Fetching = async () => {
    const response = await fetch("http://localhost:3000/problems", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setProblems(json.problems);
  };

  useEffect(() => {
    Fetching();
  }, []);

  return (
    <>
      <div id="problems-table">
        <table>
          <thead>
            <tr>
              <th>SI/No</th>
              <th>Title</th>
              <th>Acceptance</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem) => (
              <ProblemStatement
                key={problem.problemId}
                id={problem.problemId}
                title={problem.title}
                difficulty={problem.difficulty}
                acceptance={problem.acceptance}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function ProblemStatement(props) {
  const id = props.id;
  const title = props.title;
  const acceptance = props.acceptance;
  const difficulty = props.difficulty;

  return (
    <tr>
      <td>{id}</td>
      <td>
        <Link to={`/problem/${id}`}>{title}</Link>
      </td>

      <td className={difficulty}>{acceptance}</td>
      <td className={difficulty}>{difficulty}</td>
    </tr>
  );
}
export default Problems;
