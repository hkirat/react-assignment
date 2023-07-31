// ProblemDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProblemDetails = ({ problemlist }) => {

  const { pid } = useParams();
  const cleanId = pid.substring(1);
  console.log(cleanId)

  // Find the problem with the matching ID
  const problem = problemlist.find((problem) =>{
    return problem.id === cleanId;})

  if (!problem) {
    return <div>Problem not found</div>;
  }
  const getDifficultyColor = (difficulty) => {
    if (difficulty === 'Easy') {
      return 'text-green-400';
    } else if (difficulty === 'Medium') {
      return 'text-yellow-500';
    } else if (difficulty === 'Hard') {
      return 'text-red-500';
    } else {
      return 'text-gray-500';
    }
  };

  return (
    <>
      <div className='flex h-screen w-screen p-5 text-white'>
        <div className='p-4 w-1/2 mx-2 bg-bg-li rounded-lg'>
          <div className='text-4xl  p-3'>
            <h1>{problem.id}. {problem.title}</h1>
          </div>
            <div className={` text-xl p-3 ${getDifficultyColor(problem.difficulty)}`}>
              {problem.difficulty}
            </div>
          <div className='font-helvicta text-xl tracking-wider p-3'>
            {problem.description}
          </div>
          <div className='bg-bg-exli text-xl rounded-lg p-7 m-4'>
            <div className='flex flex-row '>
              <h1 className='font-bold mr-2'>Input: </h1>
              {problem.input}
            </div>
            <div className='flex flex-row mt-3'>
              <h1 className='font-bold mr-2'>Output: </h1>
              {problem.output}
            </div>
          </div>
        </div>
        <div className='p-4 w-1/2 mx-2 bg-bg-li rounded-lg'>
          <div className='p-3 relative'>
            <textarea name="code" cols="75" rows="27" placeholder='Start writing you code'
            className='bg-bg-exli text-xl p-3 rounded-md'>
            </textarea>
          </div>
          <div className='flex flex-row text-lg justify-end mx-5'>
            <button className='bg-gray-500 p-2 rounded-md font-bold w-24 mr-4'>Run</button>
            <button className='bg-green-500 p-2 rounded-md font-bold w-24'>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProblemDetails;
