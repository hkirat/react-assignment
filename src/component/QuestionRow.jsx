import React from 'react'
import "./QuestionRow.css"
import { useNavigate } from 'react-router-dom'
const QuestionRow = (props)=>{
    const id = props.question.id
    const navigate = useNavigate()
    const navigateToQues = (event) =>{       
        console.log(id)
        navigate(`/problems/${id}`, {state:{question: props.question}})
    }
    return(
        
        <tr className='t--row' onClick={navigateToQues}>
            <td>{props.index}</td>
            <td >{props.question.title}</td>
            <td>{props.question.acceptance}</td>
            <td>{props.question.difficulty}</td>
            {props.status1===true?<td>Solved</td>:<td>Not Solved</td>}
        </tr>
    )
}
export default QuestionRow