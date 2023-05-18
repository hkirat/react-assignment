import React from 'react'
import { useParams } from 'react-router-dom'
import { problems } from '../mockdata';
import "../styles/ProblemDetail.css"


function ProblemDetail() {

  const { id } = useParams();
  const prob = problems.find((ele) => ele.id === id);
  const diff = prob.difficulty;
  return (
    <div>
      <main>
        <div className="description">
          <h3>{prob.title}</h3>
          <div style={(diff === 'Medium')? {color: 'orange'} : {color: 'red'} }>{prob.difficulty}</div>
          <div className="desc">
            <h4>Description</h4><br /><br />
            <div className="text">
              {prob.description}
            </div>
          </div>
        </div>

        <div className="code">
          <div className="sidebar">
            <p>.</p>
            <p>.</p>
            <p>.</p>
          </div>
          <h2 className='message'>Code Part</h2>
        </div>
      </main>
      
    </div>
  )
}

export default ProblemDetail