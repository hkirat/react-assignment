import { Link } from "react-router-dom";
const HomePage = () => {
    return (
        <div className="box-container">

            <div className="box textcenter">
                <div className="logo-box">
                    <img className='logo' src="https://user-images.githubusercontent.com/63964149/152531278-5e01909d-0c2e-412a-8acc-4a06863c244d.png" alt="logo" />
                    <p>LeetCode</p>
                </div>
                <h1>Welcome to Leetcode</h1>

                <Link to={"/login"}><button className="button-7">Login</button></Link>
                <Link to={"/signup"}><button className="button-7">Signup</button></Link>

            </div>
        </div>
    )
}
export default HomePage;