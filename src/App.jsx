import { useState, Component } from "react";
import jwt_decode from "jwt-decode";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainContent from "./components/universalUi/MainContent";
import NavbarComponent from "./components/universalUi/NavbarComponent";
import { connect } from "react-redux";
import { authenticateUser } from "./actions/actionCreators/auth";
class App extends Component {
  componentWillMount() {
    try {
      const tokenFromLocalStorage = localStorage.getItem("token");
      const decodedToken = jwt_decode(tokenFromLocalStorage);
      //  get user details from decoded token
      // const decodedToken = {};
      let user = (({ userName, email, sub: _id, role }) => {
        return { userName, email, _id, role };
      })(decodedToken);

      this.props.dispatch(authenticateUser(user));
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="fixed-top">
            <NavbarComponent />
          </nav>
          {/* <Sidebar /> */}
          {/* all components will be rendered inside main-content */}
          <MainContent />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.userAuth,
    questions: state.questions,
  };
};
export default connect(mapStateToProps)(App);

// // import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;
