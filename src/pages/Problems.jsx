import { Link } from 'react-router-dom'
import { problems } from '../data'
import './problems.css'

const Problems = () => {
  const navigateToSingleQuestion = problem => {
    console.log(problem)
  }

  return (
    <div className='problems-container'>
      <table className='problems-table'>
        <thead className='problems-head'>
          <tr className='problems-headRow'>
            <th className='problems-headColumn'>Sr No.</th>
            <th className='problems-headColumn'>Title</th>
            <th className='problems-headColumn'>Acceptance</th>
            <th className='problems-headColumn'>Difficulty</th>
          </tr>
        </thead>
        {problems.map(problem => (
          <tbody className='problems-body' key={problem.id}>
            <tr className='problems-row'>
              <td className='problems-data'>{problem.id}</td>
              <td className='problems-data'>
                <Link
                  to={`/problemset/${problem.id}`}
                  onClick={() => navigateToSingleQuestion(problem)}
                  className='problem-dataLink'
                >
                  {problem.title}
                </Link>
              </td>
              <td className='problems-data'>{problem.acceptance}</td>
              <td className='problems-data'>{problem.difficulty}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}

export default Problems
