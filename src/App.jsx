import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to spitcode, a platform where all programmers come to spit their code
      </h1>
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li>
            <Link to={`signup`} className="text-blue-500">
              Signup
            </Link>
          </li>
          <li>
            <Link to={`login`} className="text-blue-500">
              Login
            </Link>
          </li>
          <li>
            <Link to={`problems`} className="text-blue-500">
              All problems
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
