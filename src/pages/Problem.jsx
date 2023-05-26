import "../css/Problem.css";
import { useParams } from "react-router-dom";

const Problem = () => {
  const { id } = useParams();

  return (
    <div className="problem-form-container">
      <div className="left-section">
        <div className="preview-content">
          <h2>Problem {id}</h2>
          <div className="preview-field">
            <h3>Title</h3>
            <p>title</p>
          </div>
          <div className="preview-field">
            <h3>Example</h3>
            <p>example</p>
          </div>
          <div className="preview-field">
            <h3>Input</h3>
            <p>input</p>
          </div>
          <div className="preview-field">
            <h3>Output</h3>
            <p>output</p>
          </div>
          <div className="preview-field">
            <h3>Explanation</h3>
            <p>explanation</p>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="form-fields">
          <div className="form-field">
            <label htmlFor="explanation">Write the Code</label>
            <textarea id="explanation" rows="30" cols="20"></textarea>
          </div>

          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Problem;
