import { useParams } from "react-router-dom";
import { useState } from "react";
import { problems } from "../problems";

export function Problem() {
  const { problem_id } = useParams();
  console.log(problem_id);
  const [lang, setLang] = useState("C");

  var problem = problems[problem_id];

  const handleChange = (e) => {
    setLang({ lang: e.target.value });
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "50%" }}>
        <h2>
          {problem.id}. {problem.title}
        </h2>
        <p>{problem.description}</p>
        <p>{problem.example}</p>
      </div>
      <div>
        <select onChange={handleChange} id="languages">
          <option value="c">C</option>
          <option value="c++">C++</option>
          <option value="js">Javascript</option>
        </select>
        <button>submit</button>
      </div>
    </div>
  );
}
