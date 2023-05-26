import React from 'react'

const ProblemPara = () => {
  return (
    <div className='flex justify-stretch h-screen mx-4'>
    <div className='text-md w-1/2 mx-2 my-4 p-2 '>
      <h2 className=' text-2xl font-bold leading-6 text-center'>Problem Heading</h2>
      <p className='mt-2 w-full'>Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
          A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.</p>
    </div>
      <div className='flex flex-col flex-initial w-1/2 mx-2 h-full justify-evenly'>
          <label for="w3review" className='font-semibold'>Write your programme here:</label>
          <textarea id="w3review" name="w3review" className='text-left text-gray-400 h-4/5 mt-2 p-2 rounded-md border-none ring-2 ring-slate-600  focus-visible:ring-slate-900'>
            Code Here
          </textarea>
        {/* <input type='textarea' className='text-left h-4/5 mt-2 rounded-md border-none ring-2 ring-slate-600  focus-visible:ring-slate-900'/> */}
        <div className='flex justify-evenly'>
          <button className='w-full justify-center rounded-md bg-lime-600 mx-1 px-3 py-2 text-sm font-semibold leading-6 text-white hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-lime-600 '>Submit</button>
          <button className='w-full justify-center rounded-md bg-amber-600 mx-1 px-3 py-2 text-sm font-semibold leading-6 text-white hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-amber-600 '>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default ProblemPara