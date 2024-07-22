import React, { useState } from 'react';

function Problems() {
    const problems1 = [
        {title: "Two Sum", acceptance: "80%", difficulty: "Easy"},
        {title: "Max Depth in Binary Tree", acceptance: "77%", difficulty: "Easy"},
        {title: "Max Subarray", acceptance: "88%", difficulty: "Medium"},
        {title: "Two Sum", acceptance: "80%", difficulty: "Easy"},
        {title: "Max Depth in Binary Tree", acceptance: "77%", difficulty: "Easy"},
        {title: "Max Subarray", acceptance: "88%", difficulty: "Medium"},
        {title: "Two Sum", acceptance: "80%", difficulty: "Easy"},
        {title: "Max Depth in Binary Tree", acceptance: "77%", difficulty: "Easy"},
        {title: "Max Subarray", acceptance: "88%", difficulty: "Medium"}
    ];

    const problems2 = [
        {title: "Asteroid Collision", acceptance: "68%", difficulty: "Hard"},
        {title: "Spiral Matrix", acceptance: "68%", difficulty: "Medium"},
        {title: "PreOrder Traversal", acceptance: "71%", difficulty: "Easy"},
        {title: "Spiral Matrix", acceptance: "68%", difficulty: "Medium"},
        {title: "PreOrder Traversal", acceptance: "71%", difficulty: "Easy"},
        {title: "Asteroid Collision", acceptance: "68%", difficulty: "Hard"},
        {title: "Asteroid Collision", acceptance: "68%", difficulty: "Hard"}

    ];

    const [page,setPage]=useState(1);
    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Easy':
                return 'text-green-500';
            case 'Medium':
                return 'text-yellow-500';
            case 'Hard':
                return 'text-red-500';
            default:
                return '';
        }
    };
    const problems = page===1 ? problems1 : problems2;
    return (
        <div className='p-12'>
            {problems.map((problem, index) => (
                <div key={index} className='w-2/3 h-16 bg-slate-300 my-2 flex justify-between p-5'>
                    <h1 className='font-semibold text-lg'>{problem.title}</h1>
                    <h3>{problem.acceptance}</h3>
                    <h3 className={getDifficultyColor(problem.difficulty)}>{problem.difficulty}</h3>
                </div>
            ))}
                        <div className='mb-4'>
                <button 
                    className={`px-4 py-2 mr-2 ${page === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`} 
                    onClick={() => setPage(1)}
                >
                    Page 1
                </button>
                <button 
                    className={`px-4 py-2 ${page === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`} 
                    onClick={() => setPage(2)}
                >
                    Page 2
                </button>
            </div>

        </div>
    );
}

export default Problems;