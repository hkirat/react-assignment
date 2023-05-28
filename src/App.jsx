import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Spitcode</h1>
        <p className="text-lg mb-4">The platform every programmer comes to spit code</p>
        <nav className="mb-4">
          <ul className="flex space-x-4">
            <li>
              <Link to={`signup`} className="text-blue-500 hover:text-blue-700 font-semibold">
                Signup
              </Link>
            </li>
            <li>
              <Link to={`login`} className="text-blue-500 hover:text-blue-700 font-semibold">
                Login
              </Link>
            </li>
            <li>
              <Link to={`problems`} className="text-blue-500 hover:text-blue-700 font-semibold">
                All problems
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
