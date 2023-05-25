import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Problems from './components/Problems';
import ProblemDetail from './components/ProblemDetail'


    const App = () => {

        const problems = [{
            name:"bitwiseand",
            title: "201. Bitwise AND of Numbers Range",
            difficulty: "Medium",
            acceptance: "42%"
        },{
            name:"bitwisean",
            title: "201. Bitwise AND of Numbers Range",
            difficulty: "Medium",
            acceptance: "412%"
        },
            {
                name:"happy",
                title: "202. Happy Number",
                difficulty: "Easy",
                acceptance: "54.9%"
            },
            {
                name:"removeLinked",
                title: "203. Remove Linked List Elements",
                difficulty: "Hard",
                acceptance: "41%"
            }];
        
        const problemInfo = [
            {
              title: "Find the subarray with the largest sum, and return its sum",
              examples: {
                input: "[-2, 1, -3, 4, -1, 2, 1, 5, 4]",
                output: "6",
                explanation: "The subarray [4, -1, 2, 1] has the largest sum 6"
              }
            }
          ];
        
      return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>This is Home Page</div>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/problems" element={<Problems problems={problems}/>}/>
          <Route path="/problemDetail" element={<ProblemDetail problemInfo={problemInfo}/>} />
          

        </Routes>
      </BrowserRouter>
      );
    };
    
    export default App;


    
    
