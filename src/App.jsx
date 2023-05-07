/*
 * Temporary problems array schema
 */
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/login';
import  Main from './components/Main';
import Signup from './components/Signup';
import Problem from './components/Problem';
import Problemset from './components/Problemset';

function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */



    return (
        <BrowserRouter>
        <div>

            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/problem/:title" element={<Problem />}></Route>
                <Route path="/problemset" element={<Problemset />}></Route>
            </Routes>

        </div>
    </BrowserRouter>
  )
}


export default App
