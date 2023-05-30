import "./Problems.css";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { backendURL } from "../../constants/constants.js";
import CodeArea from "./CodeArea.jsx";

export default function Problems() {
  const [questionData, setQuestionData] = useState({testCases: []})
  const [submissions, setSubmissions] = useState([])
  const testCases = questionData.testCases
  const { id } = useParams();

  useEffect(() => {
  searchQuestion(id)
    .then((result) => {
      setSubmissions(result.submissions);
      setQuestionData(result.questionData);
    })
  }, []);

  const searchQuestion = async (id) => {
    const response = await fetch(
      `${backendURL}/problems/${id}`, 
      {
        method: "GET",
        headers: {
          Authorization: `${localStorage.getItem("token")}`
        }
      }
    ) 
  const json = await response.json();
  return json;
  }

  return (
    <div className="container">
      <div className="wrapper"> 
        <div className="question-info half">
        <h1>{id}. {questionData.title}</h1>
        <br />
        <p className="desc-label">Description</p>
        <p className="description">{questionData.description}</p>
        <br />
        <p className="test-case">Test cases: </p>
          <ol>
            {questionData.testCases.map(function(data) {
              return (
                <li>
                  <p>Input: {data.input}</p>
                  <p>Output: {data.output}</p>
                </li>
              )
            })}
          </ol>
        </div>
        <CodeArea />
      </div>
    </div>
  )  
}

