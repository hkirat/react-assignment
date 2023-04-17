import {Component} from 'react'
import './index.css'

class LoginPage extends Component{
    state={username:'',password:'',loginStatus:true}

    render(){
        return(
            <div className='login-main-container'>
                <form className='login-form-container'>
                    <div className='input-container'>
                        <label>Username</label>
                        <input type='text'/>
                    </div>
                    <div className='input-container'>
                        <label>Username</label>
                        <input type='text'/>
                    </div>
                    <div className='button-container'>
                        <button className='login-button' type='submit' >Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginPage