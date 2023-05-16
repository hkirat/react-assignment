  import React from 'react';
  import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
  import LoginPage from './LoginPage';
  import Problems from './Problems';
  import ProblemDescription from './problemDescription';

  const App = () => {
    return (
      <BrowserRouter>
        <div> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/problemset/all/" element={<Problems />} />
            <Route path="/problems/:title" element={<ProblemDescription />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  };

  const Home = () => {
    return (
      <div>
        <h2>Welcome to Leetcode</h2>
        <nav>
          <ul>
            <li>
              <Link to="/signin">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  };

  export default App;
