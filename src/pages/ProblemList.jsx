import React from "react";
import { Link } from "react-router-dom";
import "./problemList.css";

const ProblemList = (props) => {
  const problems = props.problems;
  return (
    <main id="problemList">
      <table id="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Acceptance</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => {
            return (
              <ProblemStatement
                title={problem.title}
                acceptance={problem.acceptance}
                difficulty={problem.difficulty}
              />
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

function ProblemStatement(props) {
  const title = props.title;
  const acceptance = props.acceptance;
  const difficulty = props.difficulty;

  const link = title.split(". ")[1].toLowerCase().replaceAll(" ", "-");
  return (
    <tr id="row">
      <td>
        <Link id="problemLink" to={"/problems/" + link}>
          {title}
        </Link>
      </td>
      <td>{acceptance}</td>
      <td>{difficulty}</td>
    </tr>
  );
}

export default ProblemList;
