import React, { useState } from 'react';
import { useRouter } from 'next/router';

const ProblemDetail = () => {
  const router = useRouter();
  const { data } = router.query;

  const problem = data ? JSON.parse(data) : null;
  console.log('problem', problem);

  const [selectedLanguage, setSelectedLanguage] = useState('JavaScript');

  const languageOptions = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h1 className="text-2xl font-semibold mb-4">{problem.title}</h1>
          <p className="text-gray-600">{problem.difficulty}</p>
          <p className="text-gray-600">{problem.acceptance}</p>
          <p className="text-gray-600">{problem.question}</p>
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Input Details:</h2>
            {problem.inputDetails.map((inputDetail) => (
              <div key={inputDetail.label} className="text-gray-600 mt-4">
                <p>
                  Label: {inputDetail.label}<br />
                  Type: {inputDetail.type}<br />
                  Description: {inputDetail.description}<br />
                  Example:
                  <div className="bg-gray-200 p-4 mt-2">
                    <pre className="text-gray-600">{inputDetail.example}</pre>
                  </div>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          {/* Code section */}
          <div className="flex flex-col h-full bg-gray-200 p-4">
            {/* Language dropdown */}
            <div className="mb-4">
              <label htmlFor="language" className="font-semibold text-gray-700">Language:</label>
              <select
                id="language"
                className="ml-2 px-2 py-1 border border-gray-300 rounded-md bg-gray-600 text-white focus:outline-none focus:ring focus:ring-blue-500"
                value={selectedLanguage}
                onChange={handleLanguageChange}
              >
                {languageOptions.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </div>
            {/* Replace with your code */}
            <div className="flex-1 bg-gray-100">
              <pre className="text-gray-600 h-full">{`// Code section`}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetail;
