import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="hero">
      <h1 className="heroTitle">A New Way to Learn</h1>
      <p className="heroDesc">
        LeetCode is the best platform to help you enhance your skills, expand
        your knowledge and prepare for technical interviews.
      </p>

      <Link to={"/signup"} className="homeBtn">
        Create Account
      </Link>
    </section>
  );
};

export default Home;
