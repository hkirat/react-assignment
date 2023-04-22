import { useState } from "react"
import styled from "styled-components"

export default function Login(){

    const [auth, setAuth] = useState({
        email: null,
        password: null,
    })

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(auth)

    }

    const handelInputChange = (e) => {
        setAuth({...auth, [e.target.name] : e.target.value});
    }

    return(
        <StyledDiv>
            <div>
                <h1>Welcome Back!</h1>
                <form>
                    <input type="text" name="email" id="email" placeholder="Email" onChange={handelInputChange}/>
                    <input type="password" name="password" id="password" placeholder="Password" onChange={handelInputChange}/>
                    <button onClick={handelSubmit}>Login</button>
                    <p>New User? Signup</p>
                </form>
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 10px;

    div{
        width:30vw;
        h1{
            text-align: center;
            margin:20px;
        }
        form{
            display:flex;
            flex-direction:column;
            gap:10px;

            p{
                color: grey;
                text-align: center;
            }
        }
    }
`
