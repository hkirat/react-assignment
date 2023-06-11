import React from "react"
import "./Problems.css"
import {Link} from "react-router-dom"

function Problems(props) {
  const {problems} = props

  return (
    <div className="problems-container">
      <table>
        <div className="table-container">
          <div className="header-container">
            <tr>
              <th>Title</th>
              <th>Difficulty</th>
              <th>Acceptance</th>
            </tr>
          </div>

          <div className="seperator"></div>

          {problems.map((i) => (
            <tr className="item-container">
              <Link id="nav-link" to={`/problem-statement/${i.id}`}>
                <td>{i.title}</td>
              </Link>
              <td>{i.difficulty}</td>
              <td>{i.acceptance}</td>
            </tr>
          ))}
        </div>
      </table>
    </div>
  )
}

export default Problems
