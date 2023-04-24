import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter for navigation
import { problems } from '../../constants/problems';

export default function ProblemList() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [problemsPerPage] = useState(4); // Set the number of problems per page

  const handleProblemClick = (problem) => {
    const problemString = JSON.stringify(problem);
    router.push({
      pathname: '/problems/problem_slug',
      query: {
        data: problemString
      },
    });
  };

  // Get the index of the last problem on the current page
  const indexOfLastProblem = currentPage * problemsPerPage;
  // Get the index of the first problem on the current page
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  // Get the current problems to be displayed
  const currentProblems = problems.slice(indexOfFirstProblem, indexOfLastProblem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold mb-4">List of Problems</h1>
      <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Acceptance
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Difficulty
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentProblems.map((problem) => (
              <tr key={problem.title}>
                <td 
                  onClick={() => handleProblemClick(problem)} 
                  className="px-6 py-4 whitespace-nowrap"
                >
                  <div className="text-sm text-gray-900">{problem.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{problem.acceptance}%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{problem.difficulty}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        <nav className="flex items-center justify-between border-t border-gray-200">
          <button
            onClick={() => paginate(currentPage - 1)}
            className={`px-4 py-2 border-t-2 border-transparent text-sm font-medium ${
              currentPage === 
              1 ? 'text-gray-500 cursor-not-allowed' : 'text-indigo-600 hover:text-indigo-500 cursor-pointer'
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="text-sm text-gray-500">
            Page {currentPage} of {Math.ceil(problems.length / problemsPerPage)}
          </div>
          <button
            onClick={() => paginate(currentPage + 1)}
            className={`px-4 py-2 border-t-2 border-transparent text-sm font-medium ${
              currentPage === Math.ceil(problems.length / problemsPerPage)
                ? 'text-gray-500 cursor-not-allowed'
                : 'text-indigo-600 hover:text-indigo-500 cursor-pointer'
            }`}
            disabled={currentPage === Math.ceil(problems.length / problemsPerPage)}
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
}
