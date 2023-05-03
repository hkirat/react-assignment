import React from 'react'
import Template from "./ProblemsTemplate"
import data from "./problemData"
import "./Problems.css"

const ProblemsPage = () => {

  const styleHeadings = {
    borderRadius: '2rem',
    padding: '2rem',
    color: 'white'
  }

  return (
    <div className='problems_page'>
      <h1 style={{fontSize: '3rem', fontFamily: 'sans-serif', textDecoration: 'underline'}}>Problems</h1>

      <div className='prblms'>
        <table >
          <tr>
            <th style={styleHeadings}>
              Title
            </th>
            <th style={styleHeadings}>
              Acceptance
            </th>
            <th style={styleHeadings}>
              Difficulty
            </th>
          </tr>


          {data.map(datas => (
            <Template
              key={datas.id}
              title={datas.title}
              acceptance={datas.acceptance}
              difficulty={datas.difficulty}
            />
          ))}
        </table>
      </div>
    </div>
  )
}

export default ProblemsPage