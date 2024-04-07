import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import './assets/custom.css'
/*
 * Temporary problems array schema
 */
const problems1 = [{
    index: "201",
    title: "Two Sum",
    difficulty: "Easy",
    acceptance: "42%"
}, {
    index: "202",
    title: "Palindrome Number",
    difficulty: "Easy",
    acceptance: "41%"
},
{
    index: "203",
    title: "Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%"
},
{
    index: "204",
    title: "Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%"
}];
const problems2 = [{
    index: "205",
    title: "Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
}, {
    index: "206",
    title: "Reverse Array",
    difficulty: "Easy",
    acceptance: "41%"
},
{
    index: "207",
    title: "Sad Number",
    difficulty: "Easy",
    acceptance: "54.9%"
},
{
    index: "208",
    title: "Remove Duplicate Elements",
    difficulty: "Easy",
    acceptance: "42%"
}];

const problemDetail = [
    {
        index: "201",
        title: "Two Sum",
        description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
        You can return the answer in any order.`,
        input: `nums = [2,7,11,15], target = 9`,
        output: `[0,1]`
    }, {
        index: "202",
        title: "Palindrome Number",
        description: `Given an integer x, return true if x is a palindrome, and false otherwise.`,
        input: "x = 121",
        output: "true"
    }
]

const defaultCode = {
    "java": `class Solution {
        public int[] twoSum(int[] nums, int target) {
            
        }
    }`,
    "python": `class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
    `,
    "c++": `class Solution {
        public:
            vector<int> twoSum(vector<int>& nums, int target) {
                
        }
    };`,
    "javascript": `/**
    * @param {number[]} nums
    * @param {number} target
    * @return {number[]}
    */
   var twoSum = function(nums, target) {
       
   };`
}
function App() {
    return (

        /* Add routing here, routes look like -
           /login - Login page
           /signup - Signup page
           /problemset/all/ - All problems (see problems array above)
           /problems/:problem_slug - A single problem page
         */

        // return (
        //     <div>
        //         Finish the assignment! Look at the comments in App.jsx as a starting point
        //     </div>
        // )
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/login" Component={Login} />
                <Route path="/signup" Component={Signup} />
                <Route path="/problemset/all" Component={AllProblems} />
                <Route path="/problem/:index" Component={SingleProblem} />
            </Routes>
        </BrowserRouter>
    )
}

//home component
function Home() {
    return (
        <div className="home-container">
            <div className="home-container-items">
                <h1>Home</h1>
                <div className="link-container">
                    <button><a href="/login">LOGIN</a></button>
                    <button><a href="/signup">SIGNUP</a></button>
                </div>
            </div>
        </div>
    )
}

//login component
function Login() {
    return (
        <div className="login-container">
            <div className="login-form">
                <h1>Login</h1>
                <form action="/problemset/all">
                    <label>Username</label>
                    <input id="username"></input><br />
                    <label>Password</label>
                    <input id="password"></input><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

//signup component
function Signup() {
    return (
        <div className="signup-container">
            <div className="signup-form">
                <h1>Signup</h1>
                <form action="/login">
                    <label>New Username :</label>
                    <input id="username"></input><br />
                    <label>New Password :</label>
                    <input id="password"></input><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

//all problem set
function AllProblems() {
    const [page, setPage] = useState(problems1)

    return (
        <div className="summary-container">
            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Title</th>
                        <th>Acceptance</th>
                        <th>Difficulty</th>
                    </tr>
                </thead>
                <tbody>
                    {page.map(problem => (
                        <ProblemStatement page="all" key={problem.index} index={problem.index} title={problem.title}
                            acceptance={problem.acceptance}
                            difficulty={problem.difficulty} />
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={() => { setPage(page => problems1) }}>1</button>
                <button onClick={() => { setPage(page => problems2) }}>2</button>
            </div>
        </div>
    )
}

//slug component
function SingleProblem() {
    const [problemSlug, setProblemSlug] = useState("")
    let { index } = useParams();
    useEffect(() => setProblemSlug(problemSlug => index), [])
    let problem_details = problemDetail.find(problem => (problem.index == problemSlug));
    if (problem_details) {
        return (
            <ProblemPage index={problem_details.index}
                title={problem_details.title}
                description={problem_details.description}
                input={problem_details.input}
                output={problem_details.output}
            />
        )
    }
    else {
        return (
            <h1>NOT VALID INDEX</h1>
        )
    }
}

//seperate page for a problem
function ProblemPage(props) {

    const index = props.index;
    const title = props.title;
    const description = props.description;
    const input = props.input;
    const output = props.output;

    // const [language, setLanguage] = useState("java");
    // console.log("curr-val", language);

    const handleLanguageChange = (e) => {
        console.log("selected-value", e.target.value);
        setCodeChange(defaultCode[e.target.value]);
    }

    const [code, setCodeChange] = useState(defaultCode["java"]);
    const handleCodeChange = e => {
        // console.log(e.target.value);
        setCodeChange(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submmited code", e.target.elements.code.value);
    }

    return (
        <div className="page-container">
            <div className="desc-container">
                <h1>{index} : {title}</h1>
                <p>Description : {description}</p>
                <p>Input : {input}</p>
                <p>Output : {output}</p>
            </div>
            <div className="code-editor">
                <form onSubmit={handleSubmit} >
                    <label>Choose your language :</label>
                    <select name="language" id="language" onChange={handleLanguageChange}>
                        <option value="java">Java</option>
                        <option value="python">Python</option>
                        <option value="c++">C++</option>
                        <option value="javascript">JavaScript</option>
                    </select><br />
                    <textarea name="code" value={code} onChange={handleCodeChange} rows="20" cols="70"></textarea><br />
                    <button type="submit">Submit</button>
                </form>
                <div style={{ color: "red" }}>Dont Change language after editing, you will lose progress</div>
            </div>
        </div>
    )
}


// A demo component(summary component)
function ProblemStatement(props) {
    const page = props.page;
    const index = props.index;
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;
    console.log(index)

    return (
        <tr>
            <td>{index}</td>
            <td>
                <a href={`/problem/${index}`} style={{ textDecoration: "None" }}>
                    {title}
                </a>
            </td>
            <td>{acceptance}</td>
            <td>{difficulty}</td>
        </tr>
    );
}
export default App
