import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      Welcome to spitcode, a platform where all programmers come to spit their
      code
      <nav>
        <ul>
          <li>
            <Link to={`signup`}>Signup</Link>
          </li>
          <li>
            <Link to={`login`}>Login</Link>
          </li>
          <li>
            <Link to={`problems`}>All problems</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
