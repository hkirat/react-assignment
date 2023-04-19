import React from 'react'
import ProblemStatement from './ProblemStatement'
import problems from './productsData'
const AllProblems=()=>{
    return(
        problems.map((problem,key)=>{
            return(
                <ProblemStatement key={key} title={problem.title} difficulty={problem.difficulty} acceptance={problem.acceptance}/>
            
            )
        }
    ))
}

export default AllProblems