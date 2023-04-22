import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Problemset from "./Problemset";
import Problem from "./Problem";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/problemset" element={<Problemset />} />
                <Route path="/problem" element={<Problem />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

function Home() {
    return (<div>hello</div>)
}

function Signin() {
    return (<div>signin</div>)
}

function NotFound() {
    return (
        <h1> 404 bad request </h1>
    )
}
