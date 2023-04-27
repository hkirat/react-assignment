import React from 'react'
import ProblemStatement from './problemStatement'
import { Link } from 'react-router-dom'
import { useState } from 'react';

export const problems1 = [
    {
      title: "201. Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "42%",
    },
    {
      title: "201. Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "412%",
    },
    {
      title: "202. Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%",
    },
    {
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%",
    },
  ];




const AllProblems = (props) => {

  return (
    <div>
        <table>
        <tr>
          <th>Title</th>
          <th>Difficulty</th>
          <th>Acceptance</th>
        </tr>
        {problems1.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.title}</td>
              <td>{val.difficulty}</td>
              <td>{val.acceptance}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default AllProblems