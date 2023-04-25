import { useNavigate, useParams } from 'react-router-dom'
import './problem.css'
import { problems } from '../data'
import Solution from './Solution'

const Problem = () => {
  const params = useParams()
  const navigate = useNavigate()
  const id = params.id

  const problem = problems.find(problem => problem.id === id)
  console.log(problem)

  const goBack = () => {
    navigate('/problemset/all')
  }

  return (
    <div className='problem-container'>
      <div className='problem-left'>
        <h1 className='problem-number'>Problem #{problem.id}</h1>
        <p className='problem-title'>{problem.title}</p>
        <button className='problem-difficulty'>{problem.difficulty}</button>
        <div className='problem-questionContainer'>
          <p className='problem-question'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            tenetur porro ad quos deleniti corporis facere, cumque doloribus
            inventore quibusdam. Eligendi perferendis saepe eos delectus
            deserunt cumque quaerat incidunt illum?
          </p>
        </div>
        <button className='problem-goBack' onClick={goBack}>
          Go Back
        </button>
      </div>
      <div className='problem-right'>
        <Solution />
      </div>
    </div>
  )
}

export default Problem
