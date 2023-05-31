import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from './style.module.css';
import { Link } from "react-router-dom";
const HomePage = () => {
    return (
        <div>
            <Header />
            <div className={styles.landingPage}>
            
                <div className={styles.mainContent}>
                    <h1>Welcome to Why2Code?</h1>
                    <h2>Learn to Code and Change the World</h2>
                    <Link to='/signup'><button className={styles.btn}>Create Account</button></Link>
                </div>
            
            </div>
            <Footer/>
        </div>
        
    )
}

export default HomePage;

