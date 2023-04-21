import React from 'react'
import ProblemStatement from './ProblemStatement'
import problems from './productsData'
import Navbar from './Navbar'
const AllProblems=()=>{
    async function fetchData(){
     
        const response=await fetch('http://localhost:3001/questions')
        const data=await response.json()
        console.log(data)

    }
    fetchData()
    return(
        <div>
<Navbar/>
       { problems.map((problem,key)=>{
           return (
                <ProblemStatement key={key} title={problem.title} difficulty={problem.difficulty} acceptance={problem.acceptance}/>
                
                )
            }
                   )}
            </div>

    )
}

export default AllProblems