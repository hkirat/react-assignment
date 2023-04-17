import React from 'react'
import "./HomePage.css"
import loremContent from './LoremPosts'

const HomePage = () => {
  return (
    <div id="home">
      <h1 className='flex-row'>Blogs</h1>
      {loremContent.map((content,index) => (
        <div key={`blog-${index}`} className="blog-box">
          <p className="date">{content.date}</p>
          <h4 className='title'>{content.title}</h4>
          <p className="content">{content.content}</p>
        </div>
      ))}
      
    </div>
  )
}

export default HomePage