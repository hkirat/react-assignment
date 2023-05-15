import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../assets/styles/ProblemsPage.css";

const ProblemsPage = () => {
  const [CodeSeg, setCodeSeg] = useState("");
  const { id } = useParams();
  const cleanId = id.toString();
  const [problem, setProblem] = useState(null);
  const [submission, setSubmission] = useState("");

  const init = async () => {
    const response = await fetch(`http://localhost:9090/problems/` + cleanId, {
      method: "GET",
    });

    const json = await response.json();
    setProblem(json.problem);
  };

  useEffect(() => {
    init();
  }, []);
  // console.log(cleanId) ;

  const handleKey = (event) => {
    if (event.key == "Tab") {
      event.preventDefault();
      const { selectionStart, selectionEnd, value } = event.target;
      const val =
        value.substring(0, selectionStart) +
        "\t" +
        value.substring(selectionStart);
      event.target.value = val;
      event.target.selectionStart = event.target.selectionEnd =
        selectionStart + 1;
    }
    setCodeSeg(event.value);
  };

  return (
    <div>
      {problem ? (
        <div id="problempage" className="flex-row">
          <div className="ques">
            <h1>{problem.title}</h1>
            <h5>Description</h5>
            <p>{problem.description}</p>
            <code>Input : {problem.exampleIn}</code>
            <code>Output : {problem.exampleOut}</code>
          </div>
          <div className="code">
            <h1>Code Here</h1>
            <div className="code-form">
              <textarea
                onChange={(e) => setSubmission(e.target.value)}
                name="SolvedCode"
                onKeyDown={(event) => handleKey(event)}
              ></textarea>
              <button
                type="submit"
                id="submit"
                onClick={async () => {
                    console.log(localStorage.getItem("token"));

                  const response = await fetch(
                    `http://localhost:9090/submission`,
                    {
                      method: "POST",
                      headers: {
                        authorization: localStorage.getItem("token"),
                      },
                      body: JSON.stringify({
                        problemId: cleanId,
                        submission: submission,
                      }),
                    }
                  );

                  const json = await response.json();
                  console.log(json);
                }}
              >
                SubmitCode
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>The searched Question Doesn't exist</div>
      )}
    </div>
  );
};

export default ProblemsPage;
