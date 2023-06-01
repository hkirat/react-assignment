import React from "react";
import styles from './style.module.css';
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";

const HomePage = () => {
    return (
        <div>
            <div className={styles.landingPage}>
                <div className={styles.mainContent}>
                    <h1>Welcome to Why2Code?</h1>
                    <h2>Learn to Code and Change the World</h2>
                    <Link to='/signup'><button className={styles.btn}>Create Account</button></Link>
                </div>            
            </div>
        </div>
    );
}

export default Wrapper(HomePage);

