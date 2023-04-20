import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>HKIRAT ASSIGNMENT</div>
      <button>
        <Link to="/login">LOGIN</Link>
      </button>
      <button>
        <Link to="/problemset/all">PROBLEMS</Link>
      </button>
      <button>
        <Link to="/signup">SIGN UP</Link>
      </button>
    </>
  );
};

export default Home;
