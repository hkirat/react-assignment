import React from "react";
import "../assets/Problems.css";
import problems from "../questions";
import ProblemStatement from "./ProblemTable";

function TableHeading() {
  return (
    <thead>
      <tr>
        <th>Number</th>
        <th>Difficulty</th>
        <th>Question</th>
        <th>Solution</th>
      </tr>
    </thead>
  );
}



function ProblemsPage() {
  /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */
  const listProblems = problems.map((problem) => (
    <ProblemStatement
      key={problem.id}
      problem={problem}
      // title={problem.title}
      // acceptance={problem.acceptance}
      // difficulty={problem.difficulty}
    />
  ));
  return (
    <>
     
      <section className="problems--list">
        <table><TableHeading />{listProblems}</table>
      </section>
    </>
  );
}

export default ProblemsPage;
