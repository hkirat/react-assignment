
import Signup from './components/Signup.jsx';
import Homepage from './components/homepage.jsx';
import ProblemDetails from './components/problem.jsx';
import Hi from './components/hi.jsx';
import { BrowserRouter, Route , Routes  } from "react-router-dom";


function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element = {<Homepage/>} />
      <Route exact path="/hi" element = {<Hi/>} />
      <Route exact path="/signup" element = {<Signup />} />
      <Route exact path="/:title" element = {<ProblemDetails />} />
      </Routes>
    </BrowserRouter>

  )

}


export default App
