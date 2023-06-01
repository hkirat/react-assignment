import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ProblemDescription from '../components/ProblemDescription';
import axios from 'axios';
import {BACKEND_URL} from '../constants';
import Wrapper from "../components/Wrapper/Wrapper";
import CustomCodeBlock from "../components/CodeBlock/CodeBlock";
import { CodeBlock } from '@atlaskit/code';
const ProblemPage = () => {
    const [problem, setProblem] = useState({});
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('python');
    const [codeRespMessage, setCodeRespMessage] = useState('');
    const { problem_slug } = useParams();
    const handleCodeChange = (event) => {
        setCode(event.target.value)
    }
    const handleLanguageChange = (e) => {
        setLanguage(e.target.value)
    }
    const handleCodeSubmit = async (e) => {
        const body = JSON.stringify({
            questionId: problem_slug,
            code
        })
        const headers = {
            "Authorization": localStorage.getItem('token'),
            "Content-Type": "application/json",
        }
        const resp = await axios.post(`${BACKEND_URL}submission`, body, {headers});
        setCodeRespMessage(resp.data.msg);
        console.log(resp)
    }
    const init = async () => {
        const resp = await axios.get(`${BACKEND_URL}question/${problem_slug}`);
        setProblem(resp.data);
    }
    useEffect(()=>{
        init();
    }, [])
    return (
        <div className="page-content">
            <div className='problem-page'>
                <ProblemDescription className= 'problem-area' problem = {problem}/>
                <div className='code-area'>
                    <select onChange={handleLanguageChange}>
                        <option value ="python">Python</option>
                        <option value ="java">Java</option>
                        <option value ="cpp">Cpp</option>
                    </select>
                    <textarea value={code} className="code-block" onChange={handleCodeChange}>Write you code here..!</textarea>
                    {/* <CustomCodeBlock language={language} text={code} onChange={handleCodeChange}/> */}
                    {/* <CodeBlock language={language} text={code} onChange={handleCodeChange}/> */}
                    <button type="submit" onClick ={handleCodeSubmit} >Submit</button>
                    {codeRespMessage}
                </div>
            </div>
        </div>
        
        
    )
}

export default Wrapper(ProblemPage);
