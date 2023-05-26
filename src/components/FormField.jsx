import React from 'react'

const FormField = () => {
  return (
<>
  <div className="flex flex-1 flex-col justify-center min-h-full px-6 py-8 lg:px-8 border-solid h-screen border border-cyan-900 ">
      
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className='space-y-6' action='#' method='POST'>

        <h2 className='mt-4 text-center font-bold text-2xl tracking-tight leading-6 text-gray-900' >Create a new account</h2>

         <div>
              <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900' >E-Mail</label>
            <div className='mt-2'>
              <input id='email' type = "email" name='email' placeholder='email' autoComplete='email' required className='block w-full rounded-md shadow-sm border-none py-2 px-1 text-gray-800 ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
            </div>
         </div>

          
          <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900' >Password</label>
          <div className='mt-2' >
              <input id='password' type = "password" name='password' placeholder='password'autoComplete='current-password' required className='block w-full rounded-md shadow-sm border-none py-2 px-1 text-gray-800 ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
          </div>
          

          <button type = "submit" className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-indigo-600 '>Sign Up</button>
          
      </form>
    </div>
   
  </div>
</>

  )
}

export default FormField