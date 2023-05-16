import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './css/problemDescription.css';
import ProblemsDescriptionList from './data/ProblemDescriptionList';
import HighLevelLanguages from './data/HighLevelLanguages';

const ProblemDescription = () => {
  const { title } = useParams();
  const problem = ProblemsDescriptionList.find((problem) => problem.title === title);
  const [selectedLanguage, setSelectedLanguage] = useState('Java');
  const [selectedLanguageCode, setSelectedLanguageCode] = useState(
    HighLevelLanguages.find((language) => language.name === 'Java').code
  );
  
  const handleLanguageChange = (event) => {
    const languageName = event.target.value;
    setSelectedLanguage(languageName);
    const languageCode = HighLevelLanguages.find((language) => language.name === languageName).code;
    setSelectedLanguageCode(languageCode);
  };

  const handleCodeChange = (event) => {
    setSelectedLanguageCode(event.target.value);
  };

  return (
    <div className="problem-details-container">
      <div className="problem-description">
        <h2>{problem.title}</h2>
        <p>{problem.description}</p>
        <h3>Examples:</h3>
        {problem.examples.map((example, index) => (
          <div key={index} className="example-box">
            <h4>Example {index + 1}:</h4>
            <p><strong>Input:</strong> {example.input}</p>
            <p><strong>Output:</strong> {example.output}</p>
            <p><strong>Explanation:</strong> {example.explanation}</p>
          </div>
        ))}
      </div>
      <div className="code-editor">
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          {HighLevelLanguages.map((language, index) => (
            <option key={index} value={language.name}>{language.name}</option>
          ))}
        </select>
        <textarea value={selectedLanguageCode} onChange={handleCodeChange} />
      </div>
    </div>
  );
};

export default ProblemDescription;
