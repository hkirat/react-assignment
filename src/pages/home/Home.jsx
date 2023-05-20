import blogData from "./BlogData.jsx";
import "./Home.css";

function Blogs( {blogData} ) {
  const blogs = blogData.map((blog, key) => {
    return (
      <li key={key}>
        <p className="date">{blog.date}</p> 
        <h2 className="title">{blog.title}</h2>
        <p className="content">{blog.content}</p>
      </li>
    )
  })

  return (
    <ol className="blogs">
      {blogs} 
    </ol>
  )
}

export default function Home() {
  return (
    <div className="main"> 
      <div className="container">
        <Blogs blogData={blogData} /> 
      </div>
    </div>
  )
}
