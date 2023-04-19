import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import TestCase from "../components/TestCase";

const ProblemSlug = () => {
  const { problem_slug } = useParams();


  const fetchProblem = async () => {
    const { data } = await axios.get(
      `http://localhost:3001/questions/${problem_slug}/`
    );
    return data;
  };

  const {data, loading} = useQuery({
    queryKey: ["problem", problem_slug],
    queryFn: fetchProblem,
    onSuccess: (data) => {
     
    },
    enabled: !!problem_slug,
  });
  if(loading){
    return <div className="h-screen text-3xl font-bold justify-center items-center text-white">Loading...</div>
  }
  return (
    <div className="p-4 lg:w-1/2 xl:w-1/3 mx-auto">
      <h2 className="text-lg font-medium mb-2">{data?.title}</h2>
      <p className="text-gray-500 mb-4">{data?.description}</p>
      {data?.testCases?.map((testCase, index) => (
        <TestCase key={index} {...testCase} index={index}/>
        
      ))}
    </div>

  );
};

export default ProblemSlug;
