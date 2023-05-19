export default function UserForm( {type} ) {
  return (
    <div className="form-box">
      <h1>{type}</h1>
      <div className="field"> 
        <label for="username">Username</label>
        <input type="text" name="username" placeholder="Username" /> 
      </div>
      <div className="field"> 
        <label for="password">Password</label>
        <input type="text" name="password" placeholder="Password" /> 
      </div>
      <div className="field"> 
        <button type="submit">Login</button>
      </div>
    </div>
  )
}
