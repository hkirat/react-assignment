import "./Auth.css"
import { Button } from "@mui/material"
const Login = () =>{
    return(
        
        <div className="auth-container">
            <h1>Login</h1>
            <label htmlFor="username">Username: </label>
            <input name="username" type="text" />
            <label htmlFor="password">Password: </label>
            <input name="password" type="password" />
            <Button  variant="contained">Login</Button>
        </div>

    )
}
export default Login