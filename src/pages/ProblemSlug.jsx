import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TestCase from "../components/TestCase";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import { Toaster, toast } from "react-hot-toast";
import Submissions from "../components/Submissions";

const ProblemSlug = () => {
  const { problem_slug } = useParams();
  const [code, setCode] = React.useState(`// Write your code here`);
  const [submission, setSubmission]=useState([])

  const fetchProblem = async () => {
    const { data } = await axios.get(
      `http://localhost:3001/questions/${problem_slug}/`
    );
    return data;
  };

  const { data: question, loading } = useQuery({
    queryKey: ["problem", problem_slug],
    queryFn: fetchProblem,
    enabled: !!problem_slug,
  });
  if (loading) {
    return (
      <div className="h-screen text-3xl font-bold justify-center items-center text-white">
        Loading...
      </div>
    );
  }

  const handleSubmit = async () => {
    const { data } = await axios.post(
      "http://localhost:3001/submissions",
      { code, title: question?.title, questionId: question?.questionId },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return data;
  };

  const solutionMutate = useMutation({
    mutationFn: handleSubmit,
    onSuccess: (data) => {
      if(data?.success){
        toast.success(
          "Submitted your code!"
        )
       

        setSubmission(data?.result)

      }
    },
    enabled: !!problem_slug || code.length > 25,
  });
  return (
    <div className="p-6 h-full">
      <div>
        <h2 className="text-2xl font-medium mb-2 ">{question?.title}</h2>
        <p className="text-gray-500 mb-4">{question?.description}</p>
        {question?.testCases?.map((testCase, index) => (
          <TestCase key={index} {...testCase} index={index} />
        ))}
      </div>
<p className="text-yellow-400 my-5 font-semibold text-xl ">Write your code here:</p>
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.js)}
        padding={10}
        style={{
          fontSize: 20,
        }}
        textareaClassName="w-full h-96 outline-white  focus:outline-white"
        insertSpaces={false}
      />
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 my-6 px-4 rounded disabled:bg-gray-500 disabled:cursor-not-allowed"
        onClick={() => solutionMutate.mutate()}
        disabled={code.length <= 24}
      >
        Submit Solution
      </button>

      <Toaster position="top-center"/>
      <Submissions submissions={submission}/>
    </div>
  );
};

export default ProblemSlug;
