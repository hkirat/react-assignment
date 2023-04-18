import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  const handelLogin = () => {
    navigate("/");
  }

  return (
    <div className="FormDiv" style={styles.formDiv}>
      <form className="LoginBox" style={styles.loginBox}>
        <input type="email" className="username" placeholder="Email" style={styles.input} />
        <input type="password" className="password" placeholder="Password" style={styles.input} />
        <button className="submit" onClick={handelLogin} style={styles.button}>
          Login
        </button>
      </form>
    </div>
  )
}

const styles = {
  formDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
  loginBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f2f2f2',
    borderRadius: '5px'
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#e6e6e6',
    width: '100%',
    boxSizing: 'border-box'
  },
  button: {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
    width: '100%'
  }
};

