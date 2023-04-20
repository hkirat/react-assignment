import { useState } from "react"
import Navbar from "../../navbar/Navbar"
const Problemslug = () => {

const [problem, setProblem] = useState({
    description : "This is description ",
    title : "with the largest sum, and return its sum.\n",
    examples : [
        {
            input: "[-2,1,-3,4,-1,2,1,-5,4]",
            output: "6",
            explaination: "The Subarray [4,-1,2,1] has the largest sum 6."
        },
        {
            input: "[1]",
            output: "1",
            explaination: "The Subarray [1] has the largest sum 1."
        }
    ]
})
return(
    <>
    <Navbar/>
    Desription:  {problem.description}
    <br/>
    Title: {problem.title}
    <br/>
    {problem.examples.map(el => <ol key={el.input}> <br/><hr/> Input : {el.input} <br/> Output : {el.output} <br/> Explaination : {el.explaination} </ol>)}
    <hr/>
    </>
)
}

export default Problemslug
