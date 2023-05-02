import Navbar from "../../navbar/Navbar"
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-github";
import 'ace-builds/src-noconflict/theme-monokai'
import { useState } from "react";

const Problems =  
    [
        {
        id : 200,
        statement: "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
        examples: 
            [
                {    Input: "grid = [\n" +
                    "[\"1\",\"1\",\"1\",\"1\",\"0\"],\n" +
                    "[\"1\",\"1\",\"0\",\"1\",\"0\"],\n" +
                    "[\"1\",\"1\",\"0\",\"0\",\"0\"],\n" +
                    "[\"0\",\"0\",\"0\",\"0\",\"0\"]\n" +
                "]\n",
                Output: "1"
                }
            ]
        
        }
   ]


 const ProblemSlug = () => {
 const [code , setCode] = useState(`function hello() {
  console.log("Hello World!");
}`)
  return (
      <>
      <Navbar/>
       
      <div className="md:flex">
     <div className='p-2'> 
      {Problems.map(el => <li key={el.id}> {el.statement} <br/></li>)}
     </div>
      <div className='' >
    <AceEditor
      mode="c_cpp"
      theme="monokai"
      value={code} />

      <div className="mt-2 w-128 h-32 bg-slate-600 text-white italic ">Console  </div>

      </div>
      </div>
      </>
  );
}

export default ProblemSlug
