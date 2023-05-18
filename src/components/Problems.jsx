import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Problems.css"
import { problems } from '../mockdata';

function Problems() {

  return (
    <div className='all' >
     <div className="problems">
      <div className='head'>
        <div className='head'>Title</div>
        <div className='head'>Acceptance</div>
        <div className='head'>Difficulty</div>
      </div>
      {problems.map((ele) => (
          <div className='each' key={ele.id}>
              <Link className='problem' to={`/problems/${ele.id}`}><div>{ele.title}</div></Link>
              <div>{ele.acceptance}</div>
              <div>{ele.difficulty}</div>
          </div>
        ))}
     </div>

    </div>
  )
}

export default Problems