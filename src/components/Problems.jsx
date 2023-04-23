import React from 'react'
import '../style/problems.css';
import { Link, useNavigate } from 'react-router-dom';

const problems = [{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
},
{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "41%"
},
{
    title: "202. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%"
},
{
    title: "203. Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%"
}];

function ProblemStatement(props) {
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;

    return(
        <tr>
        <td><Link to={`/problems/${title}`}>{title}</Link></td>
        <td>{acceptance}</td>
        <td>{difficulty}</td>
        
        </tr>
    )
}

export default function Problems() {
  return (<table>
    <tr>
        <th>title</th>
        <th>acceptance</th>
        <th>difficulty</th>
    </tr>
    {problems.map((p)=>(
        <ProblemStatement title={p.title} difficulty={p.difficulty} acceptance={p.acceptance}/>
    ))}
    </table>
  )
}