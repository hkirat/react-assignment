import "../css/Login.css";

const Signup = () => {
  return (
    <div className="login">
      <div className="card">
        <h2>Signup</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
