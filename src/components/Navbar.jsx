import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className='navbar' style={styles.navbar}>
            <Link to="/" style={styles.link}> Home </Link>
            <Link to="/login" style={styles.link}> Login </Link>
            <Link to="/signup" style={styles.link}> Signup </Link>
            <Link to="/problems" style={styles.link}> Problems </Link>
        </nav>
    )
}

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: '10px'
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        padding: '10px'
    }
};

export default Navbar;
