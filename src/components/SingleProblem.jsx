import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const language = {
  'c': 'Use c language here',
  'java': 'Use java language here',
  'python': 'Use python language here',
  'c++': 'Use c++ language here'
}

const SingleProblem = (props) => {
  
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
          <h5>{difficulty}</h5>
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
  const [selectedLanguage, setSelectedLanguage] = useState('c');
  const [textInputValue, setTextInputValue] = useState(language[selectedLanguage]);

  const handleCheckboxChange = (e) => {
    setSelectedLanguage(e.target.value);
    setTextInputValue(language[e.target.value]);
  };

  const handleTextInputChange = (e) => {
    setTextInputValue(e.target.value);
  };

  return (
    <div className='inout_fields' >
      <div className="input_fields">
        {Object.keys(language).map((key) => (
          <label key={key}>
            <input
              type="checkbox"
              value={key}
              checked={selectedLanguage === key}
              onChange={handleCheckboxChange}
            />
            {key}
          </label>
        ))}
      </div>
      <textarea name="" id="box" value={textInputValue} onChange={handleTextInputChange} cols="40" rows="12"></textarea>
      <button id='submit' disabled >Submit</button>
    </div>
  );
}

export default SingleProblem