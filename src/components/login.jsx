function Login() {
    return (
        <div className='login-screen'>
            <div className='login'>
                <h2>F-leetcode</h2>
                <div className="input-div">
                    <div className="input-mini-dev">
                        <input type="text" placeholder="Email"/>
                        <div className="input-validation-msg"></div>
                    </div>
                    <div className="input-mini-div">
                        <input type="text" placeholder="Password"/>
                        <div className="input-validation-msg"></div>
                    </div>
                    <div className="actions">
                        <button className="signup-btn">Sign Up</button>
                        <button className="login-btn">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login