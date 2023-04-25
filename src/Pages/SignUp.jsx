import "./Auth.css"
import { Button } from "@mui/material"
const SignUp = () =>{
    return(
        <div className="auth-container">
            <h1>SignUp</h1>
            <label htmlFor="username">Username: </label>
            <input name="username" type="text" />
            <label htmlFor="email">Email :</label>
            <input name="email" type="email" />
            <label htmlFor="password">Password: </label>
            <input name="password" type="password" />
            <Button variant="contained">Signup</Button>
        </div>
    )
}
export default SignUp