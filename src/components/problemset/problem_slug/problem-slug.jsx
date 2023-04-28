import { useState } from "react"
import Navbar from "../../navbar/Navbar"
const Problemslug = () => {

const [initial , setInitial] = useState(`print(Hello world)`)


const handlechange = (e) => {
 setInitial(e.target.value)
}


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
   <div className="px-20">
    Desription:  {problem.description}
    <br/>
    Title: {problem.title}
    <br/>
    {problem.examples.map(el => <ol key={el.input}> <br/><hr/> Input : {el.input} <br/> Output : {el.output} <br/> Explaination : {el.explaination} </ol>)}
    <hr/>
    </div>
    <div className="px-20">
    <input  className= "h-40 w-40" value={initial} onChange={handlechange}/>
    </div>
    </>
)
}

export default Problemslug
