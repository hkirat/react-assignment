import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import problems from "../problems.json";

export default function SingleProblemPage() {
  const { problemId } = useParams();

  const problem = problems.filter(
    (problem) => problem.id === Number(problemId)
  );

  const markdownStyle = {
    backgroundColor: "lightgray",
    padding: "10px",
    fontFamily: "Arial, sans-serif",
    width: "50%",
  };

  return (
    <div>
      <h1>Single Problem Page</h1>
      <h3>{problem[0].title}</h3>
      <h4>Example</h4>
      <div style={markdownStyle}>
        <ReactMarkdown>
          {`Input: ${problem[0].example.Input}\n\nOutput: ${problem[0].example.Output}\n\nExplanation: ${problem[0].example.Explanation}`}
        </ReactMarkdown>
      </div>
    </div>
  );
}
