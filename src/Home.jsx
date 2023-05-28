import React from 'react';
import './Home.css';
const Home = () =>{
    return(
        <div className="homepage">
  
        <main className="main-content">
          <section className="hero">
            <h2>Sharpen Your Coding Skills</h2>
            <p>Get ready for coding interviews with LeetCode's extensive collection of coding problems.</p>
            <a href="#" className="btn btn-primary">Get Started</a>
          </section>
  
          <section className="featured-problems">
            <h3>Featured Problems</h3>
            <div className="problem">
              <h4>Two Sum</h4>
              <p>Given an array of integers, find two numbers such that they add up to a specific target.</p>
              <a href="#" className="btn btn-secondary">Solve</a>
            </div>
            <div className="problem">
              <h4>Reverse Integer</h4>
              <p>Reverse digits of an integer.</p>
              <a href="#" className="btn btn-secondary">Solve</a>
            </div>
            {/* Add more featured problems here */}
          </section>
        </main>
  
        <footer className="footer">
          <p>&copy; 2023 LeetCode. All rights reserved.</p>
        </footer>
      </div>
    );
}

export default Home;