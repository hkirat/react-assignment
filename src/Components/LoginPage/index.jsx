import {Component} from 'react'
import './index.css'

class LoginPage extends Component{
    state={username:'',password:'', loginStatus:true, showpassword:true}

    onSuccessfullLogin= ()=> {
        const { username, password } = this.state;
        if (username.length !== 0 && password.length !== 0) {  
          this.setState({ loginStatus: true });
          const { history } = this.props;
          history.replace('/problemset/all/');

    }}

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

    OnClickSignup=()=>{
        const {history} = this.props
        history.push('/signup')
    }

    render(){
        return(
            <div className='login-main-container'>
                <form className='login-form-container' onSubmit={this.onClickLoginButton}>
                    <div className='input-container'>
                        <label htmlFor='username'>Username</label>
                        <input onChange={this.onChangeUsername} id='username' type='text'/>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='password'>Password</label>
                        <input onChange={this.onChangePassword} id='password' type = { this.state.showpassword ? 'password' : 'text' }/>
                       
                    </div>
                    <div className='showpassword-container'>
                        <input className='showpassword-check' onChange={this.onShowPassword} type='checkbox' id='checkbox' />
                        <label htmlFor='checkbox'>Show password</label>
                    </div>
                    <div className='button-container'>
                    {! this.state.loginStatus && <p>Provide Valid Username and Password</p>}
                        <button className='login-button' type='submit' >Login</button>
                    </div>
                    <div className='signUpContainer'>
                    <p className='Newuser'>New User</p>
                    <button type='button' onClick={this.OnClickSignup}>SignUp</button>
                </div>
                </form>
            </div>
        )
    }
}

export default LoginPage