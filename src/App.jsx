import React,{ useEffect, useState, useTransition } from "react";
import "./app.css"
function Allproblems(props){
    return <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Difficulty</th>
                    <th>Acceptance</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
            
        </table>
        
    </>
}
function Problem(props){
    var {title,acceptance,difficulty}=props.data;
    return <>
        <tr>
            <td>{title}</td>
            <td>{difficulty}</td>
            <td>{acceptance}</td>
        </tr>
    </>
}
function App() {
    const [pagenumber,changepage]=useState(1);
    const [questions,setquestion]=useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:3001/problems/1`).then((response)=>{
            return response.json();
        }).then(data=>{
            setquestion(data);
        })
    },[]);

    return (
    <div>
        <Allproblems pagenumber={pagenumber}>
            {questions.map((item,index,arr)=> <Problem key={index} data={item}/>)}
        </Allproblems>
    </div>
  )
}


export default App
