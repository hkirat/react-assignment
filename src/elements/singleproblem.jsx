import { useParams, useNavigate } from "react-router-dom";
import "./singleproblem.css";
import { useEffect, useState, useRef } from "react";

function SingleProblem() {
  const [problem, setProblem] = useState({
    id: "",
    title: "",
    difficulty: "",
    acceptance: "",
    discription: "",
    exampleInput: {
      input: "",
      output: "",
    },
  });
  const [problemSubmissions, setProblemSubmissions] = useState([]);
  const [userSubmission, setSubmission] = useState("");
  const [showSubmissions, setShowSubmissions] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const submissionsRef = useRef(null);

  const submission = async () => {
    const response = await fetch("http://localhost:3000/submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        id: id,
        submission: userSubmission,
      }),
    });
    const json = await response.json();
    if (json.status === "Ac") {
      navigate("/problems");
    } else {
      alert(json.status);
    }
  };

  const Fetching = async () => {
    const response = await fetch("http://localhost:3000/problem/" + id, {
      method: "GET",
    });
    const json = await response.json();
    setProblem(json.problem);
  };

  const submissionview = async () => {
    const response = await fetch("http://localhost:3000/submission/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    if (json.submissions[0]) {
      setProblemSubmissions(json.submissions);
      setShowSubmissions(true);
      scrollToSubmission();
    } else {
      setShowSubmissions(false);
    }
  };
  const scrollToSubmission = () => {
    if (submissionsRef.current) {
      submissionsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    Fetching();
    // submissionview();
  }, []);

  // const { title, discription, exampleInput } = problem;
  // const { input, output } = exampleInput;
  const title = problem.title;
  const discription = problem.discription;
  const exampleInput = problem.exampleInput;
  const input = exampleInput.input;
  const output = exampleInput.output;

  return (
    <>
      <div id="problem-solving-area">
        <div id="left-section">
          <h1>{title}</h1>
          <span id="discription">
            <h5>Description</h5>
            <p>{discription}</p>
          </span>

          <div>
            <h3>Example</h3>
            <span className="examples">
              <h5>Input: </h5>
              <p>{input}</p>
            </span>
            <span className="examples">
              <h5>Output:</h5>
              <p>{output}</p>
            </span>
          </div>
          {showSubmissions && (
            <div id="submission-display" ref={submissionsRef}>
              <h3>Submissions</h3>
              <div id="submission-display-table">
                <table>
                  <thead>
                    <th>SIno</th>
                    <th>Submissions</th>
                  </thead>
                  <tbody>
                    {problemSubmissions.map((submission, index) => (
                      <tr key={submission.userId}>
                        <td>{index + 1}</td>
                        <td>{submission.submission}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        <div id="right-section">
          <h1>Write Your Code Here</h1>
          <textarea
            required
            id="solution-area"
            onChange={(e) => setSubmission(e.target.value)}
          ></textarea>
          <div id="singleproblem-buttons">
            <button id="button-submission" onClick={submissionview}>
              Submissions
            </button>
            <button id="button-submit" onClick={submission}>
              Submit Code
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProblem;
