import React from 'react'
import './Example.css'
function Example({input,output,number}) {
  return (
    <div className="example">
        <h4>Example {number}</h4>
        <div className="example-box">
            <div className="input">
                <h3>Input:</h3>
                <div className="input-data">{input}</div>
            </div>
            <div className="output">
                <h3>Output:</h3>
                <div className="input-data">{output}</div>
            </div>
        </div>
    </div>
  )
}

export default Example