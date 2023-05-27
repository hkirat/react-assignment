import ProblemStatement from "../components/problemStatement";
import { Link } from "react-router-dom";
import problems from "../problems.json";

export default function AllProblemsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">All Problems</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Acceptance</th>
            <th className="px-4 py-2">Difficulty</th>
            <th className="px-4 py-2">Actions</th>
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
      <Link to={`/`} className="block mt-4 text-blue-500">
        Home
      </Link>
    </div>
  );
}
