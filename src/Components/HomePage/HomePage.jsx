import React from "react";

import loremContent from "./LoremPosts";

const HomePage = () => {
  return (
    <div id="home" className="h-[90vh]">
      <h1 className="flex-row">Blogs</h1>
      {loremContent.map((content, index) => (
        <div key={`blog-${index}`} className="blog-box">
          <p className="date">{content.date}</p>
          <h4 className="title">{content.title}</h4>
          <p className="content">{content.content}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
