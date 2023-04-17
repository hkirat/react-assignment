import React from 'react'
import { Link } from 'react-router-dom'

import "./AllProblems.css"

const AllProblemsPage = ({problems}) => {
  return (
    <div id="allproblems">
      <table>
        <tbody>

          <tr>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Acceptance</th>
          </tr>

          {problems.map((prob,index) => (
            <tr>
              <Link to={`/problems/:${prob.problemId}`}>
                <td>{prob.title}</td>
              </Link>
              <td className={`${prob.difficulty}`} >{prob.difficulty}</td>
              <td className={`${prob.difficulty}`} >{prob.acceptance}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default AllProblemsPage