import React from 'react'
import QuestionRow from './QuestionRow'
import "./QuestionTable.css"
const quesArr = [{
    id: 1,
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
    input:"1 2 3 4 5 6",
    output: "45, 67, 8 34 ,67",
    status1: false
},{
    id:2,
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    input:"1 2 3 4 5 6",
    output: "45, 67, 8 34 ,67",
    acceptance: "412%",
    status1: true
},
    {
        id:3,
        title: "202. Happy Number",
        difficulty: "Easy",
        input:"1 2 3 4 5 6",
        output: "45, 67, 8 34 ,67",
        acceptance: "54.9%",
        status1: false
    },
    {
        id:4,
        title: "203. Remove Linked List Elements",
        difficulty: "Hard",
        input:"1 2 3 4 5 6",
        output: "45, 67, 8 34 ,67",
        acceptance: "42%",
        status1: false
    }];
const QuestionTable = (props)=>{
    return(
        <table>
            <tr className='table--header'>
                <th>Sr no.</th>
                <th>Question</th>
                <th>Acceptance</th>
                <th>Difficulty</th>
                <th>Status</th>
            </tr>
            {quesArr.map((question,i) => <QuestionRow index ={i+1} question={question}/>)}
        </table>
    )
}
export default QuestionTable