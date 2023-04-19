import React from "react";

import loremContent from "./LoremPosts";

const HomePage = () => {
  return (
    <div id="home" className="h-fit px-10 py-5 ">
      <h1 className="flex-row">Blogs</h1>
      {loremContent.map((content, index) => (
        <div key={`blog-${index}`} className="mb-10">
          <p className="date">{content.date}</p>
          <h4 className="title">{content.title}</h4>
          <p className="content">{content.content}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
