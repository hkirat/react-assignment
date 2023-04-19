//
import { Link } from "react-router-dom";

import "../css/Home.css";
import mkLogo from "../css/mk.jpg";

function Home() {
  return (
    <section id="hero" class="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1>Welcome to Manthan-MK</h1>
            <h2>
              React-Assignment of Leet-Code-Demo-Website for practicing
              JavaScript-Problems :-{" "}
            </h2>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <Link to={"/Questions"} className="btn-get-started scrollto">
                Get Started
              </Link>
              <a
                href="https://www.youtube.com/watch?v=569YZm0X5-0"
                target="_blank"
                className="glightbox btn-watch-video"
              >
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src={mkLogo}
              className="img-fluid animated"
              alt="img doesn't exit"
              height="300px"
              width="350px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
