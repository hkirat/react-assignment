import ProblemStatement from "../components/problemStatement";
import { Link } from "react-router-dom";
import problems from "../problems.json"

export default function AllProblemsPage() {
  return (
    <div>
      <h1>All Problems</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Acceptance</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem, index) => (
            <ProblemStatement
              key={index}
              id={problem.id}
              title={problem.title}
              acceptance={problem.acceptance}
              difficulty={problem.difficulty}
            />
          ))}
        </tbody>
      </table>
      <Link to={`/`}>home</Link>
    </div>
  );
}
