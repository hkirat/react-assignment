import { useState, useEffect } from 'react'
import { backendURL } from "../../constants/constants.js";
import { useParams } from 'react-router-dom'; 
import QuestionData from "./QuestionData.jsx"
import SubmissionData from "./SubmissionData.jsx"


export default function QuestionArea({ data }) {
    const [ isQtab, setIsQtab ] = useState(false);
    const { id } = useParams();

    return (
        <div className="question-info half">
            <button onClick={() => setIsQtab(() => !isQtab)}>{isQtab ? "Check submissions" : "Question"}</button>
            {
            isQtab ?
            <QuestionData questionData={data.questionData} /> :
            <SubmissionData submissions={data.submissions} />
            }
        </div>
    )
}
