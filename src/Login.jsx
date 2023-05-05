import React, { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
function mysubmission(setnavigate){

    var tempemail=document.getElementById("email").value;
    var temppass=document.getElementById("password").value;
    const url=`http://localhost:3001/login`;
    let data=JSON.stringify({email:tempemail,password:temppass});
    let obj={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:data,
        
    }
    
    fetch(url,obj).then((response)=>{
        if(response.status===200){
            console.log("login succcessful");
            setnavigate(true);
            return;
        }
        else{
            let dom=document.getElementById("alertbox");
            dom.style.display="block"
            var cc=setTimeout(() => {
                dom.style.display="none"
                clearTimeout(cc)
            }, 2000);
            
        }
    })
};  
const Login=()=>{
    const redirect=useNavigate();
    const [navigate,setnavigate]=useState(false);
    
    useEffect(()=>{
        if(navigate===true){
            redirect("/problems")  
        }
    },[navigate])
    return <>
        <div id="alertbox">
            Invalid Credentials
        </div>
        <div id="box">
            <form id="loginbox" onSubmit={(e)=>{
                e.preventDefault();
                mysubmission(setnavigate);
                
                }}>
                <div className="inputs">
                    <label>Email:<input id="email" type="email" name ="email" placeholder="Email address"></input></label>
                </div>
                <div className="inputs">
                    <label>Password:<input id="password" type="password" name="password"  placeholder="Enter password"  ></input></label>
                </div>
                <div className="inputs" style={{textAlign:"center"}}>
                    <button type="submit"><strong>Login</strong></button>
                </div>
            </form>
        </div>

    </>
}
export default Login;