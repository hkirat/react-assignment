import React from 'react';

export default function Signup() {
  return (
    <div className='signup' style={styles.signup}>
        <form action="" className="signupform" style={styles.signupform}>
            <input type="text" className="signinInput" placeholder='Name' style={styles.signinInput}/>
            <input type="email" className="signinInput" placeholder='Email' style={styles.signinInput}/>
            <input type="password" className="signinInput" placeholder='Password' style={styles.signinInput}/>
            <input type="password" className="signinInput" placeholder='Confirm Password' style={styles.signinInput}/>
            <button className="signupButton" style={styles.signupButton}>Signup</button>
        </form>
    </div>
  )
}

const styles = {
  signup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f2f2f2'
  },
  signupform: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '5px'
  },
  signinInput: {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#e6e6e6',
    width: '100%',
    boxSizing: 'border-box'
  },
  signupButton: {
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
