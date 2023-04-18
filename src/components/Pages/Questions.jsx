import React from "react";
import { Link } from "react-router-dom";

import "../css/Questions.css";

function Questions({ questions }) {
  return (
    <div id="questionsMK">
      <table>
        <tbody>
          <tr>
            <th>Questions-Title</th>
            <th>Acceptance</th>
            <th>Difficulty</th>
          </tr>

          {questions.map((quest, i) => (
            <tr>
              <Link to={"/questions/:" + quest.questNum}>
                <td>{quest.title}</td>
              </Link>
              <td className={quest.difficulty}>{quest.acceptance}</td>
              <td className={quest.difficulty}>{quest.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Questions;
