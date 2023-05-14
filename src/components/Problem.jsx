import React from 'react'
import './problem.css'

const question = {
    instructions: ["Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order."],
    examples: [{ input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
    { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
    { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
    { input: "nums = [3,2,4], target = 6", output: "[1,2]" }]
}

const Problem = () => {
    return (

        <div className='problem-container'>
            <div className='problem-container-left'>
                <h2>Description</h2>
                <div >
                    <div >
                        <span >Easy</span>

                    </div>
                    <div >
                        {question.instructions.map((item) => (
                            <span >
                                {item}
                            </span>
                        ))}
                    </div>
                    {question.examples.map((data, index) => <>
                        <h4 className='font-bold' >{' Example:' + (index + 1)}</h4>
                        <div className='questions' >
                            <div>
                                <span  >input:</span>
                                <span >{data.input}</span>
                            </div>
                            <div>
                                <span >output:</span>
                                <span >{data.output}</span>
                            </div>
                        </div></>)}
                </div>

            </div>
            <div className='problem-container-right'>
                <div>
                    <select >
                        <option>javaScript</option>
                        <option>java</option>
                        <option>C++</option>
                    </select>
                </div>

            </div>
        </div>
    )
}

export default Problem