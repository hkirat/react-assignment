import { Link } from "react-router-dom";
import coding from "../assets/home.png";

function Home() {
  return (
    <section>
      <img src={coding} alt="coding" className="home__img" />
      <h1>Level up your coding skill</h1>
      <div>
        <Link to="login">
          <button>Get Started &nbsp;{">"}</button>
        </Link>
        <Link to="problems/all">
          <button style={{ backgroundColor: "cadetblue" }}>
            Explore Problems
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
