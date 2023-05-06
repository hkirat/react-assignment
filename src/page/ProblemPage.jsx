import React from "react";
import ProblemDescription from '../components/ProblemDescription';

const ProblemPage = (props) => {
    const problem = props.problem;
    return (
        <div>
            <ProblemDescription problem = {problem}/>
            <div>
                <select>
                    <option value ="python">Python</option>
                    <option value ="java">Java</option>
                    <option value ="cpp">Cpp</option>
                </select>
                <textarea value=''>Write you code here..!</textarea>
            </div>
        </div>
        
    )
}

export default ProblemPage;

