import { Switch, Route} from 'react-router-dom';
import LoginPage from './Components/LoginPage/index'
import SignUpPage from './Components/SignUpPage'
import ProblemPage from './Components/ProblemPage'
import ProblemDescription from './Components/ProblemDescription'


const App = () => (

        <Switch>
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/signup' component={SignUpPage} />
            <Route exact path='/problemset/all/' component={ProblemPage} />
            <Route exact path='/problems/:id' component={ProblemDescription} />
        </Switch>
 
)

export default App
