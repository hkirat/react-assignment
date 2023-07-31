import React from 'react'
import { Link } from 'react-router-dom';
import ProblemDetails from './ProblemDetails';

const Problems = ({ problemlist }) => {

  

  const getDifficultyColor = (difficulty) => {
    if (difficulty === 'Easy') {
      return 'text-green-400';
    } else if (difficulty === 'Medium') {
      return 'text-yellow-500';
    } else if (difficulty === 'Hard') {
      return 'text-red-500';
    } else {
      return 'text-gray-500';
    }
  };
  return (
    <div className="flex justify-center p-10 mr-20 ml-20">
      <table className="min-w-full space-y-4 shadow-sm rounded-md">
        <thead className='bg-bg-li text-white font-monaco'>
          <tr className='text-left'>
            <th className="px-6 py-5 border-b-4 border-bg-dk">ID</th>
            <th className="px-6 py-5 border-b-4 border-bg-dk text-left">Title</th>
            <th className="px-6 py-5 border-b-4 border-bg-dk">Acceptance Rate</th>
            <th className="px-6 py-5 border-b-4 border-bg-dk">Difficulty</th>
          </tr>
        </thead>
        <tbody className='text-white '>
          {problemlist.map((problem, index) => (
            <tr className='' key={problem.id}>
                <td className="px-6 py-5 whitespace-nowrap border-b-4  border-l border-bg-dk">{problem.id}</td>
                <td className="px-6 py-4 text-left whitespace-nowrap border-b-4 border-bg-dk">
                  <Link to={`/problem/:${problem.id}`}>{problem.title}</Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b-4 border-bg-dk">{problem.acceptanceRate}</td>
                <td className={`px-6 py-4 whitespace-nowrap border-b-4 border-r border-bg-dk ${getDifficultyColor(problem.difficulty)}`}>{problem.difficulty}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Problems