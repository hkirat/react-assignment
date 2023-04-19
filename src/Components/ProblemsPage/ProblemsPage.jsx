import React from "react";
import { useParams } from "react-router-dom";
import "./ProblemsPage.css";

const ProblemsPage = ({ problems }) => {
  const { id } = useParams();
  console.log(id);
  // const cleanId = id.substring(1);

  const found = problems.find((prob) => {
    return prob.title === id;
  });

  return (
    <div>
      {found ? (
        <div id="problempage">
          <div className="ques">
            <h1>{found.title}</h1>
            <h5>Description</h5>
            <p>{found.description}</p>
            <code>Input : {found.exampleIn}</code>
            <code>Output : {found.exampleOut}</code>
          </div>
          <div className="code">
            <h1>Code Here</h1>
            <form className="code-form border border-black" action="post">
              <textarea name="SolvedCode"></textarea>
              <button type="submit" id="test">
                TestCode
              </button>
              <button type="submit" id="submit">
                SubmitCode
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>The searched Question Doesn't exist</div>
      )}
    </div>
  );
};

export default ProblemsPage;
