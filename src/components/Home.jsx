import React from 'react'

const Home = () => {
  return (

<div className="relative flex items-center justify-center h-screen bg-gray-900">
  <div className="absolute inset-0 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('https://images.alphacoders.com/462/462172.jpg')" }}>
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-4xl font-bold tracking-tight mt-20 text-white sm:text-6xl">Welcome to Peet Code</h2>
      <p className="mt-6 text-lg leading-8 text-gray-300">Work with us</p>
      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
        <a href="/login"> Login <span aria-hidden="true">&rarr;</span></a>
        <a href="/signup">Sign-up <span aria-hidden="true">&rarr;</span></a>
        <a href="/problem">All Problem <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Meet our leadership <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </div>
</div>



      



   
  )
}

export default Home