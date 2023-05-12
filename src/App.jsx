import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Signup from "./components/Signup";
import Home from "./components/Home";
import Problem from "./components/Problem";


function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/problem" element={<Problem/>}></Route>     
      </Routes>
    </BrowserRouter>
    )
}

export default App;
