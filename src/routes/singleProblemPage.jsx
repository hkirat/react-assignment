import { useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import problems from "../problems.json";

export default function SingleProblemPage() {
  const { problemId } = useParams();

  const problem = problems.filter((problem) => problem.id === Number(problemId));

  const [code, setCode] = useState(""); // State to store the code value

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleSubmit = () => {
    console.log("Submitted code:", code);
    // Add your logic to process the submitted code here
  };

  return (
    <div className="flex h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Single Problem Page</h1>
        <h3 className="text-xl font-bold mb-2">{problem[0].title}</h3>
        <h4 className="text-lg font-bold mb-2">Example</h4>
        <div className="bg-gray-200 p-4 mb-4">
          <ReactMarkdown>
            {`Input: ${problem[0].example.Input}\n\nOutput: ${problem[0].example.Output}\n\nExplanation: ${problem[0].example.Explanation}`}
          </ReactMarkdown>
        </div>
      </div>
      <div className="flex-grow">
        <AceEditor
          mode="javascript"
          theme="github"
          name="code-editor"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            tabSize: 2,
          }}
          className="flex-grow w-full"
          style={{ height: "80%", fontSize: "16px", width: "90%" }}
          value={code}
          onChange={handleCodeChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
