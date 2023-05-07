import React from "react";
import ProblemDescription from '../components/ProblemDescription';

const ProblemPage = (props) => {
    const problem = props.problem;
    return (
        <div className='problem-page'>
            <ProblemDescription className = 'problem-area' problem = {problem}/>
            <div class='code-area'>
                <select>
                    <option value ="python">Python</option>
                    <option value ="java">Java</option>
                    <option value ="cpp">Cpp</option>
                </select>
                <textarea value='' className="code-block">Write you code here..!</textarea>
                <button type="submit">Submit</button>
            </div>
        </div>
        
    )
}

export default ProblemPage;

