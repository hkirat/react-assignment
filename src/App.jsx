import HomePage from "./pages/HomePage.jsx";
import Signup from "./pages/signup.jsx";
import LogIn from "./pages/LogIn.jsx";
import Problems from "./pages/Problems.jsx";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";

const root = createBrowserRouter([
    {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
        {
            path:"/login",
            element: <LogIn />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/signup",
            element: <Signup />,
            errorElement: <ErrorPage />,
        }, {
            path: "/problems",
            element: <Problems />,
            errorElement: <ErrorPage />,
        }
    ]
    }
    ])

function App() {
    return (
        <RouterProvider router={root} />
    );
}

export default App;
