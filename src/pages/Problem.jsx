import React, { useContext, useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import Results from "../components/Results";

const Problems = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [code, setCode] = useState("");
  const [console, setConsole] = useState(false);
  const [result, setResult] = useState([]);
  const token = localStorage.getItem("token") || "";
  const fetchData = async () => {
    const info = await fetch(`http://localhost:3001/user/question/${id}`, {
      headers: { authorization: `temp ${token}` },
    });
    const details = await info.json();
    if (info.status === 200) {
      setData(details.msg);
    } else {
      setError(details.err);
    }
  };
  // use effect to fetch the data.
  useEffect(() => {
    fetchData();

    return () => {
      fetchData;
    };
  }, []);
  // handleTest
  const handleTest = async () => {
    const values = {
      qid: id,
      code: code,
    };
    let response = await fetch("http://localhost:3001/user/submissions", {
      headers: {
        authorization: `temp ${token}`,
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(values),
    });
    let info = await response.json();
    setResult(info);
    setConsole(true);
  };

  return (
    <>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div className="grid gap-2 sm:grid-cols-2 w-full  border border-cyan-500 h-[85vh]">
          <div className="p-4  border border-cyan-500 grid-rows-1">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p>
              TestCases
              {/* {data?.testCases.map((t) => {
                return (
                  <div className="bg-gray-800 text-gray-400 rounded-md p-2">
                    <p>Input:{t.input}</p>
                    <p>Output:{t.output}</p>
                  </div>
                );
              })} */}
            </p>
            <p>{JSON.stringify(data.testCases)}</p>
          </div>
          <div className="p-4  border border-cyan-500 grid-rows-2 flex flex-col overflow-hidden">
            <h1>Language</h1>
            <div className="overflow-hidden grow h-[70vh] ">
              <textarea
                name=""
                id=""
                className="text-black p-2 mt-2 w-full h-full rounded-md"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              ></textarea>
            </div>
            <div className=" transition delay-100 ease-in-out">
              <div className="flex flex-row p-2 w-full gap-2 justify-between text-center">
                <button
                  className="px-1 py-1 bg-gray-600 rounded-md "
                  onClick={() => setConsole((prev) => !prev)}
                >
                  Console {!console ? "show" : "hide"}
                </button>
                <div className="flex justify-between gap-2">
                  <button
                    className="rounded-md bg-cyan-500 text-white px-2 py-2"
                    onClick={handleTest}
                  >
                    Test
                  </button>
                  <button className="rounded-md bg-cyan-500 text-white px-2 py-2">
                    Submit
                  </button>
                </div>
              </div>
              <div
                className={`${
                  console
                    ? "block overflow-scroll min-h-[30vh] px-2 border border-gray-400 rounded-sm w-full "
                    : "hidden"
                }`}
              >
                {result.length === 0 ? (
                  <span>No submissions and test done....</span>
                ) : (
                  <Results result={result} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Problems;
