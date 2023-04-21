import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AllProblems from "./components/AllProblems";
import Problem from "./components/Problem";

/*
 * Temporary problems array schema
 */
const problems = [
    {
        problemId: "1",
        title: "201. Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "42%"
    },
    {
        problemId: "2",
        title: "201. Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "41.2%"
    },
    {
        problemId: "3",
        title: "202. Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%"
    },
    {
        problemId: "4",
        title: "203. Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%"
    }
];


function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/signup",
            element: <Signup />,
        },
        {
            path: "/problemset/all",
            element: <AllProblems problems={problems} />,
        },
        {
            path: "problems/:id",
            element: <Problem problems={problems} />,
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

// A demo component
function ProblemStatement(props) {
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;

    return <tr>
        <td>
            {title}
        </td>
        <td>
            {acceptance}
        </td>
        <td>
            {difficulty}
        </td>
    </tr>
}
export default App
