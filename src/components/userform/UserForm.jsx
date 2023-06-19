import "./UserForm.css";
import { useRef } from "react";

export default function UserForm( {type, onClick} ) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="form-box">
      <h1 className="form-type">{type}</h1>
      <div className="field"> 
        <label>Username</label>
        <input ref={usernameRef} type="text" name="username" placeholder="Username" /> 
      </div>
      <div className="field"> 
        <label>Password</label>
        <input ref={passwordRef} type="text" name="password" placeholder="Password" /> 
      </div>
      <div className="field"> 
        <button type="submit" onClick={() => {onClick(usernameRef.current.value, passwordRef.current.value)}}>Login</button>
      </div>
    </div>
  )
}
