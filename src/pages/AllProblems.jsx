import React from 'react'

const AllProblems = () => {
    const problems = [{
        id: 101,
        title: "Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "42%"
    },{
        id: 102,
        title: "Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "41.2%"
    },
        {
            id: 103,
            title: "Happy Number",
            difficulty: "Easy",
            acceptance: "54.9%"
        },
        {
            id: 104,
            title: "Remove Linked List Elements",
            difficulty: "Hard",
            acceptance: "42%"
        },
        {
            id: 105,
            title: "Pallindrome efficient",
            difficulty: "Easy",
            acceptance: "88%"
        }
    ];


    function CheckLevel(){
        
    }


    function ProblemStatement(props){
        const title = props.title;
        const acceptance = props.acceptance;
        const difficulty = props.difficulty;
        const id = props.id;
        const txt = '/problems/id/'+id;

        return  <table>
               <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{acceptance}</td>
                <td  >{difficulty}</td>
               </tr>
    </table>
    }
    
  return (
    <div>
      <nav>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/login">login</a>
            </li>
            <li>
                <a href="/signup">signup</a>
            </li>
            <li>
                <a href="/problems/all">All problems</a>
            </li>
            <li>
                    <a href="/problems/id/:id">Problem</a>
                </li>
        </ul>
    </nav>



    <div className="problem">
    <h1>All problems</h1>
       
        {problems.map(problem => <ProblemStatement id={problem.id} title={problem.title} acceptance={problem.acceptance} difficulty={problem.difficulty} />)}
    </div>
    </div>
  )
}

export default AllProblems;
