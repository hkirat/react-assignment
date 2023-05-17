import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
// import TaskComponent from "./TaskComponent";

const ProbmlemsListPage = ({ problems }) => {
  const problemsPerPage = 5; // Number of problems to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProblem = currentPage * problemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  const currentProblems = problems.slice(indexOfFirstProblem, indexOfLastProblem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="problems-table">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Acceptance</th>
          </tr>
        </thead>
        <tbody>
          {currentProblems.map((problem, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <Link to={`/problems/${problem.problemId}`} className="link">
                <td>{problem.title}</td>
              </Link>
              <td style={{ color: problem.difficulty === 'Easy' ? 'green' : problem.difficulty === 'Medium' ? 'orange' : problem.difficulty === 'Hard' ? 'red' : '' }}>
                {problem.difficulty}</td>
              {/* {<TaskComponent diff={problem.difficulty}/>} */}
              <td>{problem.acceptance}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(problems.length / problemsPerPage)}
            onPageChange={handlePageChange}
          />
    </div>
  )
}
export default ProbmlemsListPage;