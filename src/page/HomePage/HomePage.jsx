import React from "react";
import styles from './style.module.css';
const HomePage = () => {
    return (
        <div className={styles.landingPage}>
            <div className={styles.mainContent}>
                <h1>Welcome to Why2Code?</h1>
                <p>
                    Current Routes:
                    <ul>
                        <li>path="/login"</li>
                        <li>path="/signup"</li>
                        <li>path="/problemset/all"</li>
                        <li>path="/problem/:problem_slug"</li>
                    </ul>      
                </p>
            </div>
            
        </div>
    //     <div className="landing-page">
    //         <div className="background">
    //             <img src="https://www.placecage.com/1920/1080" />
    //         </div>
    //         <div className="content">
    //             <h1>My Landing Page</h1>
    //             <p>This is my landing page. It uses a dark background and images to create a sense of mystery and intrigue.</p>
    //             <button>Learn More</button>
    //         </div>
    //   </div>
        
    )
}

export default HomePage;

