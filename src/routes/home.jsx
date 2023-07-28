
const blogs = [
    {
        date: "2021-09-01",
        title: "Blog 1",
        description: "This is blog 1",
    },
    {
        date: "2021-09-02",
        title: "Blog 2",
        description: "This is blog 2",
    },
    {
        date: "2021-09-03",
        title: "Blog 3",
        description: "This is blog 3",
    },
    {
        date: "2021-09-04",
        title: "Blog 4",
        description: "This is blog 4",
    },
    {
        date: "2021-09-05",
        title: "Blog 5",
        description: "This is blog 5",
    },
    {
        date: "2021-09-06",
        title: "Blog 6",
        description: "This is blog 6",
    },
    {
        date: "2021-09-07",
        title: "Blog 7",
        description: "This is blog 7",
    },
]

function Home() {
    const blogCards = blogs.map(blog => {
        return <BlogCard date={blog.date} title={blog.title} description={blog.description} />
    })
  return (
    <div className="blog-content">
      <h1 style={{ textAlign : 'center' }}> BLOGS </h1>
        { blogCards }
    </div>
  )
}

function BlogCard(props) {
  const style = {
    padding: '10px',
    margin: '10px',
  }
  return (
    <div className="blog-card">
      <h4 style={style}> { props.date }</h4>
      <h2 style={style}> { props.title } </h2>
      <p style={style}> { props.description } </p>
    </div>
  )
}


export default Home
