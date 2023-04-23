// import logo from './logo.svg';
import './App.css';
import Main from './Components/Main.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home.jsx';
import ProblemStatement from './Components/Problemstatement.jsx';
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/problemset/all" component={Main} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route path="/problemset/:slug" component={ProblemStatement} />
            </Switch>
        </Router>
    );
}

export default App;
