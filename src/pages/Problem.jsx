import React from 'react'
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'

const Problem = () => {
    const problems = [{
        id: 101,
        title: "Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "42%"
    },{
        id: 102,
        title: "Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "412%"
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

    let {id} = useParams();
    let d = problems.find(function hell0(elem){ return elem.id})

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



<div className="single-problem-content">

   <div className='single-problem'>
    <h1>single problem</h1>
    <h1>problem #{d.id}</h1>
    <h2>{d.title}</h2>
   </div>

   <div className='problem-output'>
<label htmlFor="">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, officia.
    <div>
        <label htmlFor="">Choose your language:</label>
        <select name="lang" id="">
           <option value="js">javascript</option>
           <option value="pyton">Python</option>
           <option value="java">java</option>
           <option value="C++">C++</option>
        </select>
        <textarea placeholder='start your code here...........'></textarea>
        <div className="button">
         <button >Test Run</button>
         <button>Submit code</button>
        </div>
    </div>
</label>
   </div>
</div>


    </div>
  )
}

export default Problem;
