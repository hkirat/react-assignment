import React from 'react'
import Navbar from './Navbar'

const Home = () => {
    const Blogs =  [
        {
            title : "Why use C++",
            date : "10 July 2023",
            content : "C++ is very fast"
        },
        {
            title : "Why use C++",
            date : "10 July 2023",
            content : "C++ is very fast"
        },
        {
            title : "Why use C++ users hate Java",
            date : "2 July 2023",
            content : "Java is very verbose"
        },
        {
            title : "Why Java is better than C++",
            date : "5 March 2023",
            content : "No Pointers and cross platforms"
        },
        {
            title : "Why Ai will take your job",
            date : "1 March 2023",
            content : "Because Ai can do alot of automation, that required humans"
        },
        {
            title : "What jobs will Ai Create",
            date : "28 Feb 2023",
            content : "Ai and Ml engineering jobs"
        },
        {
            title : "Is Python the real chad or Javascript",
            date : "15 Feb 2023",
            content : "Its like asking is IronMan better than Thor or Captain America"
        },
    ]

  return (
    <div className='h-screen w-full flex flex-col'>
       <Navbar/> 
       <div className='w-full flex flex-col justify-center items-center'>
        <div className='my-4 text-xl font-semibold'>BLOGS</div>
    {
        Blogs.map(blog =>(
            <div className='w-3/4 h-28 border-y border-x-2 border-gray-400 flex flex-col p-3 gap-2'>
                <div className='text-xs'>{blog.date}</div>
                <div>{blog.title}</div>
                <div className='text-sm'>{blog.content}</div>
            </div>
        ))
    }
       </div>
    </div>
  )
}

export default Home