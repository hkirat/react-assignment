import React from 'react'
import { Link } from 'react-router-dom'
const AllProblems = ({ problems }) => {
    return (
        <div>
            <table border={2}>
                <tr>
                    <th>Title</th>
                    <th>Difficulty</th>
                    <th>Acceptance</th>
                </tr>
                {
                    problems.map(prob => {
                        const { problemId, title, difficulty, acceptance } = prob
                        return (
                            <tr>
                                <Link to={`/problems/${problemId}`}>
                                    <td>{title}</td>
                                </Link>
                                <td>{difficulty}</td>
                                <td>{acceptance}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default AllProblems