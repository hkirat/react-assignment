import React from 'react';
import { useParams } from 'react-router-dom';

function ProblemDescriptionPage() {
  const { description } = useParams();

  return (
    <div>
      <h1>Problem Description: {description}</h1>
      {/* Your problem description goes here */}
    </div>
  );
}

export default ProblemDescriptionPage;
