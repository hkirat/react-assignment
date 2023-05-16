import React from 'react'
import { useParams } from 'react-router-dom'

export const Problem = (props) => {
  const {problem_id} = useParams()
  const problem = props.problems.find((problem) => {return problem.id == problem_id})
  const processCodeSubmission = () => {}
  return (
    <div class="problem">
      <div class="question">
        <h1>Problem {problem.title}</h1>
        <div>Difficulty: {problem.difficulty}</div>
        <div>Acceptance {problem.acceptance}</div>
        <p>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Voluptates minus voluptatibus dolores obcaecati. <br />
            Recusandae minima necessitatibus labore deserunt corrupti in sit? <br />
            Repudiandae illo commodi dicta rerum fugit. Iste, provident? Dicta. <br />
        </p>
      </div>
      <div class="solution">
        <form onSubmit={processCodeSubmission}>
          <label htmlFor="solution">Type your code below</label><br/>
          <textarea type="text" id='solution' required="true" class=""/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  )
}
