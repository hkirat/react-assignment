import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'

const Problem = (props) => {
  const problems = props.props
  const { problem_slug: id } = useParams()

  const requiredProblem = problems.filter(item => item.index === id)
  console.log(requiredProblem)

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(e.target[0].value)
  }

  return (
    <div className='h-screen w-full'>
      <Navbar />
      <div className='w-full  flex' style={{ "height": "91%" }}>
        <div className='w-1/2 h-full border-2 border-red-400 flex flex-col pt-6 pl-3 gap-3'>
          <div className='text-xl font-normal'>
            {requiredProblem[0].index}. {requiredProblem[0].title}
          </div>
          <div className='flex flex-col mt-5 gap-4'>
            <div className='text-xs'>Description</div>
            <div>{requiredProblem[0].description}</div>
          </div>
          <div className='flex flex-col mt-5 gap-2'>
            <div className='flex gap-1'>
              <div>Input: </div>
              <div>{requiredProblem[0].exampleIn}</div>
            </div>
            <div className='flex gap-1'>
              <div>Output: </div>
              <div>{requiredProblem[0].exampleOut}</div>
            </div>
          </div>

        </div>


        <div className='w-1/2 border-2 border-blue-400 flex flex-col gap-2 pl-3 pt-7'>
          <div className='text-xl font-medium ml-10'>CODE HERE</div>
          <div className='w-full flex justify-center'  style={{"height":"90%"}}>
              <form onSubmit={handleSubmit} className='flex flex-col' style={{"width":"90%", "height":"90%"}}>
                <textarea name="codesubmit" className='bg-gray-50 outline-none border border-gray-100 w-full'  style={{"height":"90%"}}></textarea>
                <button type='submit' className='bg-green-400 mt-2 rounded-md w-24 h-10'>Submit</button>
              </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Problem