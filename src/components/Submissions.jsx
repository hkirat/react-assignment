import React from 'react'
import Solution from './Solution';

const Submissions = ({submissions:answers}) => {

    return (
        <div className="p-4 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">User Submitted Answers</h1>
          {answers.map((answer, index) => (

     <Solution answer={answer} key={index}/>
          ))}
        </div>
      );
    
}

export default Submissions