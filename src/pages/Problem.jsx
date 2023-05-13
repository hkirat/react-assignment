import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import "./problem.css";

const langs = {
  'C': 'C language boilerplate',
  'Java': 'Java language boilerplate',
  'Python': 'Python language boilerplate',
  'C++': 'C++ langauge Boilerplate'
}

const Problem = (props) => {

  // parameter value
  const params = useParams();
  const { problem_slug } = params;
  const parameter = problem_slug.replaceAll("-", " ");

  // problem array
  const { problems } = props;


  const problem = problems.find(p => {
    const singleProblem = p.title.toLowerCase().split(". ")[1];

    if (singleProblem === parameter) {
      return p;
    }

  });

  if (!problem) {
    return <div>Problem not found</div>
  }

  const { title, difficulty, acceptance, description, example } = problem;

  return (
    <main id='singleProblemMain'>
      <div className="left">

        <div className="info">
          <h1>{title}</h1>
          <span id={difficulty} className='difficulty'>{difficulty}</span>
          <p>{description}</p>
        </div>

        <div className="example">
          <div className="ex1">
            <h4>Example:</h4>
            <p>{example}</p>
          </div>
        </div>

      </div>

      <div className="right">
        <LanguageSelector />
      </div>
    </main>
  )
}

function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState('C');
  const [textInputValue, setCodebox] = useState(langs[selectedLanguage]);

  const setLanguage = (e) => {
    setSelectedLanguage(e.target.value);
    setCodebox(langs[e.target.value]);
  };

  const setBoilerplate = (e) => {
    setCodebox(e.target.value);
  };

  return (
    <div className='inout_fields' >
      <div className="input_fields">
        <select onChange={setLanguage} title='languageSelector'>
            {Object.keys(langs).map((key) => (
                <option
                value={key}
                defaultValue={selectedLanguage === key}
                
                >{key}</option>
            ))}
        </select>
      </div>
      <textarea placeholder="start coding..." id="box" value={textInputValue} onChange={setBoilerplate} cols="40" rows="12"></textarea>
      <button id='submit' disabled >Submit</button>
    </div>
  );
}

export default Problem