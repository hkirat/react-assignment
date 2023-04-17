import React from 'react'
import ProblemStatement from "../components/Problems";
import problems from '../data/problemList';

const Problems = () => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Acceptance</th>
                    <th>Difficulty</th>
                </tr>
            </thead>
            <tbody>
                {problems.map((problem) => {
                    return <ProblemStatement title={problem.title} difficulty={problem.difficulty} acceptance={problem.acceptance}/>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Problems