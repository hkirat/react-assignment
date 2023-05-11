import React from 'react'
import { useParams } from 'react-router-dom'

const question = {
instructions:["Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
"You may assume that each input would have exactly one solution, and you may not use the same element twice.",
"You can return the answer in any order."],
examples:[{input:"nums = [2,7,11,15], target = 9",output:"[0,1]"},
{input:"nums = [3,2,4], target = 6",output:"[1,2]"},
{input:"nums = [3,2,4], target = 6",output:"[1,2]"},
{input:"nums = [3,2,4], target = 6",output:"[1,2]"}]
}

export default function Problem() {

    const {title}=useParams()
  return (
    
    <div className=" flex space-x-1  flex-col  md:flex-row lg:flex-row ">
        <div className=" bg-gradient-to-tr from-black to-slate-900 rounded-md basis-1/2 flex-col  overflow-auto" style={{ height: "calc(100vh - 4rem)" }} >
            <nav className="bg-gray-800 text-white rounded-t-md pl-3  text-lg flex-1 font-bold">Description</nav>
            <div className="flex-1 mx-3 mt-5 flex flex-col">
                <h1 className="text-2xl text-white font-bold font-mono">{title}</h1>
                <div className='mt-3'>
                    <span className="bg-green-800 bg-opacity-60 rounded-3xl px-2 py-1 text-sm text-green-600">Easy</span>
                    <i className="ml-2 fas fa-share text-white hover:bg-gray-600 hover:bg-opacity-60 p-2 rounded-md cursor-pointer"></i>
                </div>
                <div className='mt-3 flex flex-col bg-gray-600 p-3 rounded-md bg-opacity-40'>
                {question.instructions.map((data)=>(
                    <span className="text-gray-300  text-sm mt-2">
                        {data}
                    </span>
                ))}</div>
                {question.examples.map((data,index)=><>
                <span className="text-white mt-2 text-xl">{(index+1)+'. Example:'}</span>
                <div className='mt-3 flex flex-col bg-gray-600 p-3 rounded-md bg-opacity-40'>
                    <div>
                    <span className="text-white mt-2 font-bold">input:</span>
                    <span className="text-gray-400 ml-2">{data.input}</span>
                    </div>
                    <div>
                    <span className="text-white mt-2 font-bold">output:</span>
                    <span className="text-gray-400 ml-2">{data.output}</span>
                    </div>
                </div></>)}
            </div>
            
        </div>
        <div className="bg-black rounded-md basis-1/2 "style={{ height: "calc(100vh - 4rem)" }}>
        <nav className="bg-gray-800  rounded-t-md pl-3 underline text-lg">
        <div class="relative inline-flex ">
  <select class="p-1  rounded-md bg-gray-600 text-white bg-opacity-50 font-bold">
    <option>java</option>
    <option>python</option>
    <option>C++</option>
  </select>
</div>

        </nav>
        </div>
    </div>
  )
}
