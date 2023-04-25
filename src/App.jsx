import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import AllProb from './pages/AllProb'
import ProbTemp from './pages/ProbTemp'




function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above) [will make this /problems/all]
       /problems/:problem_slug - A single problem page [will make this /problems/id/:slug]
     */


    

       return (
        
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/problems/all' element={<AllProb />} />
            <Route path='/problems/id/:id' element={<ProbTemp />} />
          </Routes>
        
      )
    }

  

        
        

export default App
