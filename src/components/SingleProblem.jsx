import React from 'react';
import { useParams } from 'react-router-dom';
import '../style/problem.css';

export default function SingleProblem() {
  let {title} = useParams();
  return (
    <div>
      <header className='header'></header>
      <div className='container'>
        <div className='problem-statement'>
          <h3 className=''>{title}</h3>
        </div>
        <div className='editor'>
          <textarea/>
          <div className='buttons'>
            <button className='btn-console'>console^</button>
            <button className='btn-run'>Run</button>
            <button className='btn-submit'>submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
