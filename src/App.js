
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Problems from './components/problemset/Problems';
import Twosum from './components/examples/Twosum';

import Home from './components/Home/Home';

function App() {
  return (
    <div >
      
     <Router>
      <Routes>  
        <Route path='/' element={<Home/>} />
        <Route path='login' element={<Login/>} />
        <Route path='signup' element={<Signup/>} />
        <Route path='problemset/all' element={<Problems/>}/>
        <Route  path='/problem/:problemName/:questionId' element={<Twosum />} />
        
      </Routes>
     </Router>
      
        
    </div>
  );
}

export default App;
