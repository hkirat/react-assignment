import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import ShowSubmission from "./ShowSubmission";

const ProblemDetails = () => {
  const { id } = useParams();

  const cleanId = id.replace(":", "");
  const [problem, setProblem] = useState(null);
  const [submission, setSubmission] = useState("");

  const fetchProblem = async () => {
    try {
      const res = await fetch(`http://localhost:3000/problems/${cleanId}`, {
        method: "GET",
      });
      // if (!res.ok) {
      //   throw new Error("Problem details not found");
      // }
      const data = await res.json();
      setProblem(data.problem);
      console.log(data);
    } catch (error) {
      console.error("Error fetching problem:", error);
    }
  };
  useEffect(() => {
    fetchProblem();
  }, []);

  if (!problem) {
    return <div>Loading...</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const payload = {
    //   id: cleanId,
    //   submission: submission,
    // };
    // console.log(payload);
    console.log(localStorage.getItem("token"));

    const res = await fetch("http://localhost:3000/submissions", {
      method: "POST",
      headers: {
        authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: cleanId,
        submission: submission,
      }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="flex gap-6 lg:pt-20 lg:p-40 p-12">
      <div className="flex flex-col gap-6 w-1/2">
        <div className="flex flex-col gap-1">
          <div className="text-3xl">{problem.title}</div>
          <div
            className={`${
              problem.difficulty === "Easy"
                ? "text-green-500"
                : problem.difficulty === "Medium"
                ? "text-yellow-500"
                : "text-red-500"
            } px-4 py-1 rounded-full bg-gray-200 w-fit text-xs`}
          >
            {problem.difficulty}
          </div>
        </div>
        <div>{problem.description}</div>
        <div>
          <p className="font-semibold">Example : </p>
          <div className="flex">
            <code className="font-medium">Input: </code>
            <code className="">{problem.input}</code>
          </div>
          <div className="flex">
            <code className="font-medium">Output: </code>
            <code className="">{problem.output}</code>
          </div>
        </div>
        <div>{/* <ShowSubmission id={cleanId} /> */}</div>
      </div>

      <div className="w-1/2 gap-3 space-y-4">
        <p className="text-3xl">Code Here</p>
        <div className="flex-col flex gap-2">
          <div className="w-full h-80 ring-black/50 ring-1 rounded-lg">
            <textarea
              onChange={(e) => setSubmission(e.target.value)}
              name="Solution"
              className="w-full h-80 ring-black/50 ring-1 outline-none rounded-lg p-2"
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="p-2 px-6 text-left bg-slate-200 w-fit rounded hover:bg-slate-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetails;
