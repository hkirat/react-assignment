import React from 'react';

const LanguageSelection = ({ languages, selectedLanguage, onLanguageSelect }) => {
  const handleLanguageSelect = (language) => {
    onLanguageSelect(language);
  };

  return (
    <div className="language-selection">
      <h3>Select Language:</h3>
      <div className="language-buttons">
        {languages.map((language) => (
          <button
            key={language}
            className={`language-button ${selectedLanguage === language ? 'active' : ''}`}
            onClick={() => handleLanguageSelect(language)}
          >
            {language}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelection;
