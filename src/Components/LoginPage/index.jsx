import {Component} from 'react'
import './index.css'

class LoginPage extends Component{
    state={username:'',password:'', loginStatus:true, showpassword:true}

    onSuccessfullLogin= ()=> {
        const { history } = this.props
        history.replace('/')
    }

    onClickLoginButton = Event=> {
        const {loginStatus} = this.state
        Event.preventDefault()
        if(loginStatus===true){
            this.onSuccessfullLogin()
        }
    }

    onChangeUsername=Event=>{
        this.setState({username:Event.target.value})
    }

    onChangePassword=Event=>{
        this.setState({password:Event.target.value})
    }

    onShowPassword=()=> {
        this.setState((prevState) => ({ showpassword: !prevState.showpassword }));
    }

    render(){
        return(
            <div className='login-main-container'>
                <form className='login-form-container' onSubmit={this.onClickLoginButton}>
                    <div className='input-container'>
                        <label htmlFor='username'>Username</label>
                        <input onChange={this.onChangeUsername} id='username' type='password'/>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='password'>Password</label>
                        <input onChange={this.onChangePassword} id='password' type = { this.state.showpassword ? 'password' : 'text' }/>
                       
                    </div>
                    <div className='showpassword-container'>
                        <input onChange={this.onShowPassword} type='checkbox' id='checkbox' />
                        <label htmlFor='checkbox'>Show password</label>
                    </div>
                    <div className='button-container'>
                        <button className='login-button' type='submit' >Login</button>
                    </div>
                    <div className='signUpContainer'>
                    <p>New User</p>
                    <button>SignUp</button>
                </div>
                </form>
            </div>
        )
    }
}

export default LoginPage