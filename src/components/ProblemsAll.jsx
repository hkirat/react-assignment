import React from 'react'
import problem from '../problems.json';
import './problemsall.css'
import { Link, NavLink } from 'react-router-dom';

const ProblemsAll = () => {
  return (
    <div>
        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Difficulty</th>
                <th>Acceptance</th>
            </tr>
        </thead>

        {problem.map((item) => (
            <tbody>
            <tr key={item.id}>
                <td>
                <Link to="/problems/:problem_slug">
                    {item.title} 
                </Link>
                </td>
                <td>{item.difficulty} </td>
                <td>{item.acceptance} </td>
            </tr>
            </tbody>
        ))}

        </table>
        
    </div>
  )
}

export default ProblemsAll