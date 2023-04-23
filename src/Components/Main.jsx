import React, { useState } from 'react'
import Navbar from './Navbar';
import Allproblems from './Allproblems.jsx';
import { Link } from 'react-router-dom';
const problems1 = [
 {
  id: 1,
  title: 'Bitwise AND of Numbers Range',
  difficulty: 'Medium',
  acceptance: '42%',
 },
 {
  id: 2,
  title: 'Happy Number',
  difficulty: 'Easy',
  acceptance: '54.9%',
 },
 {
  id: 3,
  title: 'Remove Linked List Elements',
  difficulty: 'Hard',
  acceptance: '42%',
 },
];
//  const problems2 = [
//   {
//    title: 'title1',
//    difficulty: 'Medium',
//    acceptance: '32%',
//   },
//   {
//    title: 'title2',
//    difficulty: 'Easy',
//    acceptance: '57.9%',
//   },
//   {
//    title: 'title3',
//    difficulty: 'Hard',
//    acceptance: '42%',
//   },
//   {
//    title: 'title4',
//    difficulty: 'Medium',
//    acceptance: '82%',
//   },
//  ];
function Main() {
 const [problems, setProblems] = useState([]);
 return (
  <div>
   <Navbar />
   <h1>Problems List</h1>
   <button onClick={() => {
    setProblems(problems => problems1)
   }}>1</button>
   {/* <button onClick={() =>{
        setProblems(problems => problems2)
       }}>2</button> */}

   {problems.map((p) => (
    <div key={p.id}>
     <div>
      <Link to={{
       pathname: `/problemset/:${p.id}`,
       state: {
        problem: p,
       }
      }}>
       <div>{p.title}</div>
       <div>{p.difficulty}</div>
       <div>{p.acceptance}</div>
      </Link>
     </div>
     <br />
    </div>

   ))}


  </div>
 )

}

{/* <Link
  to={{
    pathname: `/quiz/${video.youtubeID}`,
    state: {
      videoTitle: video.title,
    },
  }} */}


export default Main;
