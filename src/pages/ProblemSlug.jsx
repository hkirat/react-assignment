import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TestCase from "../components/TestCase";

import { Toaster, toast } from "react-hot-toast";
import Submissions from "../components/Submissions";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/ext-language_tools";

const ProblemSlug = () => {
  const { problem_slug } = useParams();
  const [code, setCode] = React.useState(`function solution() {
    // Write your code here
    }`);

  const [submission, setSubmission] = useState([]);

  const fetchProblem = async () => {
    const { data } = await axios.get(
     
      import.meta.env.VITE_BACKEND+'/questions'+`/${problem_slug}`
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
      if (data?.success) {
        toast.success("Submitted your code!");

        setSubmission(data?.result);
      }
    },
    enabled: !!problem_slug || code.length > 25,
  });
  return (
    <div className="p-6 h-full flex md:flex-row flex-col space-y-5 md:space-x-5 ">
      <div className="md:flex-[0.4]">
        <h2 className="text-2xl font-medium mb-2 ">{question?.title}</h2>
        <p className="text-gray-500 mb-4">{question?.description}</p>
        {question?.testCases?.map((testCase, index) => (
          <TestCase key={index} {...testCase} index={index} />
        ))}
      </div>
      <div className="md:flex-[0.6]">
        <AceEditor
          placeholder="Write your code here..."
          mode="javascript"
          theme="monokai"
          name="blah2"
          style={{
            width: "100%",
          }}
          onChange={(value) => setCode(value)}
          fontSize={20}
          showPrintMargin={false}
          showGutter={true}
          highlightActiveLine={true}
          value={code}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
          }}
          editorProps={{ $blockScrolling: Infinity }}
        />

        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 my-6 px-4 rounded disabled:bg-gray-500 disabled:cursor-not-allowed"
          onClick={() => solutionMutate.mutate()}
          disabled={code.length <= 55}
        >
          Submit Solution
        </button>

        <Toaster position="top-center" />
        <Submissions submissions={submission} />
      </div>
    </div>
  );
};

export default ProblemSlug;
