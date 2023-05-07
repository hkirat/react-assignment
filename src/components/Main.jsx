import {BrowserRouter, Routes, Route} from 'react-router-dom';
const problems = [{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
},{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "412%"
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
    console.log(props);
    return <tr>
        <td>
            {title}
        </td>
        <td>
            {acceptance}
        </td>
        <td>
            {difficulty}
        </td>
    </tr>
}
const Main =()=>{
    return (
        <div>
             
             {problems.map((problem)=>
             //render below component
             <ProblemStatement title={problem.title} acceptance={problem.acceptance} difficulty={problem.difficulty} />
             )}
            
        </div>
        // A demo component

    )
}

export default Main;