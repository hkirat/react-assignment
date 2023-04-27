import CodeEditor from "../../components/codeEditor/codeEditor";
import ProblemPanel from "../../components/problem-panel/problem-panel";
import './problemPage.css'
import { useParams } from "react-router-dom";
import problems from '../../data.json'
import Split from "@uiw/react-split";
import React, { useState } from "react";




function ProblemPage() {
    const { id } = useParams();
    const problem = problems.find(problem => problem.id == id)
    const [isHovered, setIsHovered] = useState(false);



    const defaultStyle = {
        backgroundColor: "#1d1d1d",

    };

    const hoverStyle = {
        backgroundColor: '#1b7fcb',
    };
    const style = isHovered ? { ...defaultStyle, ...hoverStyle } : defaultStyle;
    return (
        <div id="problemPage">
            <Split style={{ height: '100vh', width: '100vw' }} renderBar={({ onMouseDown, ...props }) => {
                return (
                    <div  {...props} onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)} style={{ background: 'transparent', width: "7px", }} >
                        <div onMouseDown={onMouseDown} style={style} />
                    </div>
                );
            }}>

                <ProblemPanel problem={problem} />
                <CodeEditor problem={problem} />

            </Split>



        </div >
    )
}
export default ProblemPage;