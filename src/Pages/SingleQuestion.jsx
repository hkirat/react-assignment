import React from "react";
import "./SingleQuestion.css"
import { useLocation } from "react-router-dom";
import QuesInfo from "../component/QuestionInfo";
import CodeArea from "../component/CodeArea";

function ProblemStatement(props) {
    const loaction = useLocation()
    const question = loaction.state.question
    // console.log(typeof(question))

    return (
        // <h1>Single Question</h1>
        <main >
            <QuesInfo  question={question}/>
            <CodeArea />
        </main>

    )
    // <tr>
    //     <td>
    //         {title}
    //     </td>
    //     <td>
    //         {acceptance}
    //     </td>
    //     <td>
    //         {difficulty}
    //     </td>
    // </tr>
}
export default ProblemStatement