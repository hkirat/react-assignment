import { useEffect, useState } from "react";

function Submission({ id }) {
  const [submission, setSubmission] = useState([]);

  useEffect(() => {
    async function getSubmission() {
      const response = await fetch(
        `http://127.0.0.1:3001/submissions?problemId=${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
        }
      );

      const data = await response.json();
      setSubmission(data);
    }

    getSubmission();
  }, []);

  return (
    <div className="submissions">
      <p>Submissions</p>
      {submission.map((s, i) => (
        <div className="submission" key={i}>
          <p>
            Using <strong>{s.language}</strong>
          </p>
          <p>Code:</p>
          <p>{s.code}</p>
        </div>
      ))}
    </div>
  );
}

export default Submission;
