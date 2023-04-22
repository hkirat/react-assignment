import { useState } from "react"
import styled from "styled-components"

export default function Login() {

    const [auth, setAuth] = useState({
        username: null,
        email: null,
        password: null,
    })

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(auth)

    }

    const handelInputChange = (e) => {
        setAuth({ ...auth, [e.target.name]: e.target.value });
    }

    return (
        <StyledDiv>
            <div>
                <h1>Let's code</h1>
                <form>
                    <input type="text" name="username" placeholder="Full Name" onChange={handelInputChange} />
                    <input type="text" name="email" placeholder="Email" onChange={handelInputChange} />
                    <input type="password" name="password" placeholder="Password" onChange={handelInputChange} />
                    <button onClick={handelSubmit}> Create an Account</button>
                    <p>Already have an account? Login</p>
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
