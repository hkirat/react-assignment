import React, {useState} from "react"
import "./ProblemStatement.css"
import {useParams} from "react-router-dom"

function ProblemStatement(props) {
  const {id} = useParams()
  const {problems} = props
  const question = problems.find((i) => i.id == id)

  return (
    <div className="ps-container">
      <div className="ps-question">
        <div className="ps-title">Question {id}</div>
        <div className="ps-description">{question.statement}</div>
      </div>

      <div className="ps-code">
        <textarea className="ps-input" rows={10} cols={50}></textarea>
        <button className="code-submit">Submit</button>
      </div>
    </div>
  )
}

export default ProblemStatement
