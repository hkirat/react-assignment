import axios from "axios";
import { Component } from "react";
import { useNavigate} from 'react-router-dom'
import ('../Styles/logintabs.css');


class Logincomponent extends Component{

    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            islogedis:false,
            loginerror:undefined
        }
    }
    submitlogin=()=>{
        let obj={
            email:this.state.username,
            password:this.state.password
        }
        axios({
            method:'POST',
            url:'http://localhost:5402/login',
            headers:{"Content-Type":"Application/json"},
            data:obj
        }).then(result=>{
            console.log(result.data);
            const navigate=this.props.navigate;
            navigate('/home');
            localStorage.setItem('user',JSON.stringify(result.data.values[0]));
            localStorage.setItem('islogedin',true);
            this.setState({
                loginerror:undefined
            })
        }).catch(error=>{console.log(error)
        this.setState({
            loginerror:"Wrong UserName or Password"
        })
    })
    }

   

    onchangehandler=(value,element)=>{
        this.setState({
            [element]:value,
            loginerror:undefined
        })
    }
    
    render(){
        return(
            <div className="logincomponent"> 
            {
                this.state.loginerror ? <div className="alert alert-danger">{this.state.loginerror}</div>:null
            }
          
            <p>Already a user? Login!</p>
            <hr/>
            
                <label className="my-2">Email:</label>
                <br/>
                <input type="email" placeholder="" value={this.state.username} onChange={(event)=>{this.onchangehandler(event.target.value, 'username')}}></input>
                <br/>

                <label className="my-2 ">Password:</label>
                <br/>
                <input type="password" required value={this.state.password} onChange={(event)=>{this.onchangehandler(event.target.value, 'password')}}  />
                <br/>

                <button onClick={()=>this.submitlogin()} className="mt-4"  >Login</button>


          

            </div>
        )  
    }
}

const Login=()=>{
    const navigate =useNavigate()

 return<Logincomponent navigate={navigate}></Logincomponent>
}


export default Login;