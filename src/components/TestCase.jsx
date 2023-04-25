import React from 'react'

const TestCase = ({index, input, output}) => {
  return (
    <div  className="mb-2">
          <h3 className="text-sm font-medium mb-1">Test Case {index + 1}</h3>
          <div className="border border-gray-200 p-2 hover:bg-gray-100 cursor-pointer transition">
            <p className="text-gray-500 mb-2">Input: {input}</p>
            <p className="text-gray-500 mb-0">Output: {output}</p>
          </div>
        </div>
  )
}

export default TestCase