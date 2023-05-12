import React from 'react'

const Signup = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center h-screen bg-gray-900">
  <div className="absolute inset-0 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('https://wallpaperaccess.com/full/3604778.jpg')" }}>
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-4xl font-bold tracking-tight mt-20 text-white sm:text-6xl">Welcome to Peet Code</h2>
      <p className="mt-6 text-lg leading-8 text-gray-300">Sign-up </p>
      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
        
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
    
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      
      <div>
        <div class="flex items-center justify-between">
          <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Enter Your Name</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-white hover:text-indigo-500">Full Name</a>
          </div>

        </div>
        <div class="mt-2">
          <input id="name" name="name" type="name"  required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-white hover:text-indigo-500">Forgot password?</a>
          </div>

        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
      </div>
    </form>
      </div>
    </div>
  </div>
</div>
   
    </div>
    </div>
  )
}

export default Signup