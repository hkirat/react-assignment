import { Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ('../Styles/logintabs.css');

class SignUpc extends Component{

    constructor(){
        super();
        this.state={
            islogedin:false,
            firstname:'',
            lastname:'',
            email:'',
            password:''
        }
    }

    inputhandler=(value,element)=>{
        this.setState({
            [element]:value
        })

        

    }

    onsubmitsignup=()=>{
        const userobj={
            email: this.state.email,
            password:this.state.password,
            firstname:this.state.firstname,
            lastname:this.state.lastname
        };

        axios({
            method:'POST',
            url:'http://localhost:5402/signup',
            headers:{"Content-Type":"Application/json"},
            data:userobj
        }).then(result=>{
            const navigate=this.props.navigate;
            navigate('/home')
            alert("Account created succefully")
            // console.log(result.data);
        }).catch(error=>{
            window.alert(error.response.data.message)
        })


    }
    render(){
        return(
            <div className="Signupcomponent">
            {/* <h5>SignUp</h5> */}
            <p>New User?  SignUp!</p>
            <hr/>

            <form>
                <label className="my-2">First Name:</label>
                <br/>
                <input type="text"  value={this.state.firstname} onChange={(event)=>this.inputhandler(event.target.value ,"firstname")} required />
                <br/>
                <label className="my-2" >Last Name:</label>
                <br/>
                <input type="text" required value={this.state.lastname} onChange={(event)=>this.inputhandler(event.target.value ,"lastname")}/>
                <br/>
                <label className="my-2">Email:</label>
                <br/>
                <input type="email" required value={this.state.email} onChange={(event)=>this.inputhandler(event.target.value ,"email")}/>
                <br/>

                <label className="my-2 " >Password:</label>
                <br/>
                <input type="password" required  value={this.state.password}  onChange={(event)=>this.inputhandler(event.target.value ,"password")} />
                <br/>
                <br/>
                <span  className="mt-4  submitbuttonsignup" onClick={()=>this.onsubmitsignup()} > Create Account</span>


            </form>
            </div>
        )
    }
}

const SignUp=()=>{
    const navigate=useNavigate();

   return <SignUpc navigate={navigate}></SignUpc>
}

export default SignUp;