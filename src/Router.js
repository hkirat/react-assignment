import{Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Question from './Components/Question';
import User from './Components/User';
import Detail from './Components/Detailspage';





    const Router =()=>{
    return(
        
        <BrowserRouter>
        <Routes>
        
            <Route path='/' Component={User}/>
            <Route path='/home' Component={Home}/>
            <Route path='/question' Component={Question}/>
            <Route path='/detail/:qno' Component={Detail}/>

        </Routes>
        </BrowserRouter>
        
      
    )
   
}

export default Router;