import React from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Solution(props) {
    const [lang, setLang] = React.useState('');
    const problem = props.problem;
    const prams = useParams();
    const id = prams.problem_slug;
    const prob = problem.filter(problem => problem.id == id)
    console.log(id);
  return (
    <div>
        <div className='text-center text-4xl font-bold p-10 '>
            <h1>Solution {id}</h1>
        </div>
        <div className='flex justify-center'>
            <div className='border border-black rounded p-4'>
                {/*  */}
                {prob.map((problem  ) => {
                        return (<div className='p-4 '>
                                <div className=''>
                                    <div>
                                        {problem.title}
                                    </div> 
                                </div>
                                <div className=''>
                                    <div>
                                        {problem.acceptance}
                                    </div> 
                                </div>
                                <div className=''>
                                    <div>
                                        {problem.difficulty}
                                    </div> 
                                </div>
                                
                            </div>)
                })}
            </div>
            <div  className='text-center'>
                <div className='p-4'>
                    <div className='py-2'>
                        <select id="language" required 
                            onChange={(e) => setLang(e.target.value)}
                            className="bg-white border border-gray-600 rounded-lg text-gray-900 
                            text-sm rounded-lg focus:ring-blue-500 hover:border-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                <option className='hidden' >language</option>
                                <option >c++</option>
                                <option >java</option>
                                <option >javascript</option>
                                <option >python</option>
                        </select> 
                    </div>
                    <div>
                        <textarea name="" id="" cols="40" rows="6" className='border border-black rounded p-3'></textarea>
                    </div>
                    {/* <input type="textarea" className='border border-black rounded w-96 '/> */}
                    
                </div>
                <div className=''>
                    <button className='border border-black p-2 rounded'>Submit</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}
