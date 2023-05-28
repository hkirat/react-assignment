import React from "react";

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to WhyToCode?</h1>
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
        
    )
}

export default HomePage;

