import { Switch, Route} from 'react-router-dom';
import LoginPage from './Components/LoginPage/index'
import SignUpPage from './Components/SignUpPage'


/*
 * Temporary problems array schema
 */
const problems = [{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
},{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "412%"
},
    {
        title: "202. Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%"
    },
    {
        title: "203. Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%"
    }];


const App = () => (

        <Switch>
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/signup' component={SignUpPage} />
        </Switch>
 
)

export default App
