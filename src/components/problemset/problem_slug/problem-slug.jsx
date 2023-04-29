import { useState } from "react"
import Navbar from "../../navbar/Navbar"

import { Dropdown } from "../../dropdown/dropdown"
import { Editor } from "../../editor/Editor"
import { Highlighter } from "../../highlighter/highlighter"
import * as themes from 'react-syntax-highlighter/dist/esm/styles/hljs'
import * as languages from 'react-syntax-highlighter/dist/esm/languages/hljs'
import './../../../index.css'

const defaultLanguage = <code> ${'javascript' || Object.keys(languages).sort()[0] } </code> ; 
const defaultTheme = <code> ${'atomOneDark' || Object.keys(themes).sort()[0] } </code> ; 


 const ProblemSlug = () => {
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState(defaultLanguage);
  const [theme, setTheme] = useState(defaultTheme);

  return (
      <>
      <Navbar/>
      //will complete soon on a vacation  
      <div className="flex-end">
  <div className=" mt-20 mx-20  ControlsBox">
        <Dropdown
          defaultTheme={defaultLanguage}
          onChange={(e) => setLanguage(e.target.value)}
          data={languages}
        />
       
      </div>
    <div className="App">
    
      <div className="PanelsBox">
        <Editor
          placeHolder="Type your code here..."
          onChange={(e) => setInput(e.target.value)}
        />
        <Highlighter language={language} theme={themes[theme]}>
          {input}
        </Highlighter>
      </div>
    </div>
      </div>
      </>
  );
}

export default ProblemSlug
