import { useRef, useState } from "react";
import { backendURL, languages } from "../../constants/constants.js"
import { useParams } from 'react-router-dom'; 


async function handleSubmit(id, language, code) {    
  fetch(`${backendURL}/problems/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("token")
    }, 
    body: JSON.stringify({
      id, 
      language,
      code 
    })
  }) 
}

export default function CodeArea({ updateData }) {
  const [language, setLanguage] = useState("c")
  const codeRef = useRef(null);
  const { id } = useParams();

  return (
    <div className="input-box half">
     <select onChange={(e) => {setLanguage(e.target.value)}}>
       {languages.map(language => {
        return (
          <option value={language}>{language}</option>
        )
       })}
     </select>
      <br />
      <textarea ref={codeRef} type="text" className="code-area" />
      <button onClick={() => {handleSubmit(id, language, codeRef.current.value); updateData()}} type="submit" className="code-submit">Submit</button>
    </div>
  )
}
