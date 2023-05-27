import "../css/Problem.css";
import { Link, useParams } from "react-router-dom";
const Problems = [
  {
    id: "1",
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    input: "nums = [2,7,11,15], target = 9",
    output: "[0,1]",
  },
  {
    id: "2",
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    input: "nums = [2,7,11,15], target = 9",
    output: "[0,1]",
  },
  {
    id: "3",
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    input: "nums = [2,7,11,15], target = 9",
    output: "[0,1]",
  },
  {
    id: "4",
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    input: "nums = [2,7,11,15], target = 9",
    output: "[0,1]",
  },
  {
    id: "5",
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    input: "nums = [2,7,11,15], target = 9",
    output: "[0,1]",
  },
  {
    id: "6",
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    input: "nums = [2,7,11,15], target = 9",
    output: "[0,1]",
  },
  {
    id: "7",
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    input: "nums = [2,7,11,15], target = 9",
    output: "[0,1]",
  },
  {
    id: "8",
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    input: "nums = [2,7,11,15], target = 9",
    output: "[0,1]",
  },
  {
    id: "9",
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    input: "nums = [2,7,11,15], target = 9",
    output: "[0,1]",
  },
  {
    id: "10",
    title: "Add Two Numbers",
    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    input: "l1 = [2,4,3], l2 = [5,6,4]",
    output: "[7,0,8]",
  },
  {
    id: "11",
    title: "Add Two Numbers",
    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    input: "l1 = [2,4,3], l2 = [5,6,4]",
    output: "[7,0,8]",
  },
  {
    id: "12",
    title: "Add Two Numbers",
    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    input: "l1 = [2,4,3], l2 = [5,6,4]",
    output: "[7,0,8]",
  },
  {
    id: "13",
    title: "Add Two Numbers",
    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    input: "l1 = [2,4,3], l2 = [5,6,4]",
    output: "[7,0,8]",
  },
  {
    id: "14",
    title: "Add Two Numbers",
    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    input: "l1 = [2,4,3], l2 = [5,6,4]",
    output: "[7,0,8]",
  },
  {
    id: "15",
    title: "Add Two Numbers",
    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    input: "l1 = [2,4,3], l2 = [5,6,4]",
    output: "[7,0,8]",
  },
  {
    id: "16",
    title: "Add Two Numbers",
    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    input: "l1 = [2,4,3], l2 = [5,6,4]",
    output: "[7,0,8]",
  },
  {
    id: "17",
    title: "Add Two Numbers",
    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    input: "l1 = [2,4,3], l2 = [5,6,4]",
    output: "[7,0,8]",
  },
  {
    id: "18",
    title: "Add Two Numbers",
    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    input: "l1 = [2,4,3], l2 = [5,6,4]",
    output: "[7,0,8]",
  },
];

const Problem = () => {
  const { id } = useParams();

  const problem = Problems.find((problem) => problem.id === id);
  if (!problem) {
    return <div>Problem not found</div>;
  }

  const { title, description, input, output } = problem;

  return (
    <div className="problem-form-container">
      <div className="left-section">
        <div className="preview-content">
          <div className="preview-field">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className="preview-field">
            <h3>Input</h3>
            <p>{input}</p>
          </div>
          <div className="preview-field">
            <h3>Output</h3>
            <p>{output}</p>
          </div>
          <div className="preview-field">
            <button>
              <Link
                to="/problemList"
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                Go Back To Problem Set{" "}
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="form-fields">
          <div className="form-field">
            <label htmlFor="explanation" style={{ margin: "1rem" }}>
              Write the Code
            </label>
            <textarea id="explanation" rows="23" cols="20"></textarea>
          </div>

          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Problem;
