import React,{ useEffect, useMemo, useState, useTransition } from "react";
import "./App.css"
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
    const [pagenumber,setpage]=useState(1);
    const [questions,setquestion]=useState([]);
    const [ispending,starttransition]=useTransition();
    const [totalquestions, settotalques]=useState(0);
    useMemo(()=>
    {
        var c=0;
        fetch(`http://localhost:3001/numberofques`).then((response)=>{
            return response.text();
        }).then((data)=>{
            c=Number(data);
            settotalques(c);
        })
        return c;
    },[])

    function Navigatepage(){
        var arr=[];
        var totalpages=Math.ceil(totalquestions*1.0/5);
        for(var i=0;i<totalpages;i++){
            arr.push(i+1);
            
        }
        return <>
            <div id="container">
                {arr.map((item,index)=> {
                    if(item==pagenumber){
                        return <button key={index} style={{backgroundColor:"skyblue"}} className="flexbox" onClick={()=>fetchquestions(item)} > {item} </button>
                    }
                    return <button key={index} className="flexbox" onClick={()=>fetchquestions(item)} > {item} </button>
                } )}
            </div>
        </>
    }
    const fetchquestions=(page=1)=>{
        starttransition(()=>{
            fetch(`http://localhost:3001/problems/${page}`).then((response)=>{
                return response.json();
            }).then(data=>{
                setquestion(data);
                setpage(page);
            })
        })
    }

    useEffect(()=>{
        fetchquestions();
    },[])
    

    return (
    <>
        {ispending?<h1>Loading..</h1>:
        <>
            <Allproblems>
                {questions.map((item,index,arr)=> <Problem key={index} data={item}/>)}
            </Allproblems>
            <Navigatepage/>
        </>
        }
    </>
  )
}


export default App
