//
import "../css/Solution.css";

import { useParams } from "react-router-dom";

function Solution({ questions }) {
  const { num } = useParams();
  const mkNum = num.substring(1);

  const quest = questions.find((quest) => {
    return quest.questNum === mkNum;
  });

  return (
    <div className="flex-row" id="questions">
      <div className="quesMK">
        <h1>{quest.title}</h1>
        <h3>
          <u>Description</u> :
        </h3>
        <p>{quest.description}</p>

        <code>Input : {quest.input}</code>
        <br />
        <code>Output : {quest.output}</code>
        <br />
        <code>Explanation : {quest.explanation}</code>
      </div>

      <div className="mk">
        <h1>Solution :-</h1>
        <form className="mkp" action="/Questions">
          <textarea
            id="solution"
            placeholder="Enter your solution here ..."
          ></textarea>

          <button type="submit" id="btn">
            Submit your Solution
          </button>
        </form>
      </div>
    </div>
  );
}

export default Solution;
