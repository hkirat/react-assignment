// import React from 'react';

const HomePage = () => {
  // Dummy data for random blogs
  const blogs = [
    {
      id: 1,
      title: 'Introduction to JavaScript',
      content: '...',
      date: 'June 1, 2023',
      description: 'A beginner-friendly guide to JavaScript basics.',
    },
    {
      id: 2,
      title: 'Data Structures 101',
      content: '...',
      date: 'June 5, 2023',
      description: 'Learn about common data structures and their usage.',
    },
    {
      id: 3,
      title: 'Best Practices for Frontend Development',
      content: '...',
      date: 'June 10, 2023',
      description: 'Discover useful tips for writing efficient frontend code.',
    },
    {
        id: 4,
        title: 'An anonymous user posted Report Cheaters in Contest (how and why)',
        content: '...',
        date: 'June 23, 2023',
        description: "I reoprted users in some past contests (saw their solution and checked all the cheaters have same code they only changed some variable name and some of them didn't even...",
    },
    {
        id: 5,
        title: 'Join our Contest Biweekly Contest 108',
        content: '...',
        date: 'June 25, 2023',
        description: 'Discover useful tips for writing efficient frontend code.',
    }
  ];

  return (

    <div className="flex flex-center ml-28 mt-28 text-left relative">
      <div className="">
        {blogs.map((blog) => (
          <blog key={blog.id} className=" bg-bg-li rounded-lg cursor-pointer shadow p-4 mb-4 flex flex-col space-y-5
          transition duration-300 hover:scale-105">
            <h3 className="text-xl text-white font-bold mb-2">{blog.title}</h3>
            <p className="text-sm text-white mb-2">{blog.date}</p>
            <p className="text-sm text-white">{blog.description}</p>
          </blog>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
