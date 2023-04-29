import React from 'react'

const Home = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/login">login</a>
                </li>
                <li>
                    <a href="/signup">signup</a>
                </li>
                <li>
                    <a href="/problems/all">All problems</a>
                </li>
                <li>
                    <a href="/problems/id/:id">Problem</a>
                </li>
            </ul>
        </nav>
        <div className='home-page'>
            <h1>Welcome to Code World</h1>
            <img src="https://img.freepik.com/free-vector/programmers-computer-using-low-code-platform-computer-tiny-people-low-code-development-low-code-platform-lcdp-easy-coding-concept_335657-2413.jpg" alt="" />
        </div>
    </div>
  )
}

export default Home
