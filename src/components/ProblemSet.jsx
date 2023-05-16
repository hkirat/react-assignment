import React from 'react'
import { Link } from 'react-router-dom'

export const ProblemSet = (props) => {

  const problemsList = props.problems.map(
    (problem) => {
      return (
        <tr>
          <Link to={"/problems/"+problem.id}>
            <td>{problem.title}</td>
          </Link>
            <td>{problem.difficulty}</td>
            <td>{problem.acceptance}</td>
        </tr>
      )
    }
  )

  return (
    <div>
        <table>
          <tr>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Acceptance Rate</th>
          </tr>
          {problemsList}
        </table>
    </div>
  )
}
