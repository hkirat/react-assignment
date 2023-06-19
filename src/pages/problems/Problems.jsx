import "./Problems.css";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { backendURL } from "../../constants/constants.js";

import CodeArea from "./CodeArea.jsx";
import QuestionArea from "./QuestionArea.jsx"

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

export default function Problems() {
  const [ data, setData ] = useState({questionData: {id: 1, testCases: []}, submissions: []})
  const { id } = useParams();

  const updateData = () => {
    searchQuestion(id)
    .then((result) => {
        setData(() => result);
    })
  }

  useEffect(() => {
    updateData()
  }, []);

  return (
    <div className="container">
      <div className="wrapper"> 
        <QuestionArea data={data} />
        <CodeArea updateData={updateData} />
      </div>
    </div>
  )  
}

