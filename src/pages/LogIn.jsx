function LogIn() {
    return (
        <div className="form-control w-full max-w-xs mx-auto">
            <h1 className="text-4xl font-bold text-center my-6">LOG IN</h1>
            <label className="label">
                <span className="label-text">Enter Email</span>
            </label>
            <input type="text" placeholder="example@gmail.com" className="input input-bordered w-full max-w-xs" />
            <label className="label">
                <span className="label-text">Enter Password</span>
            </label>
            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
            <button className="btn btn-outline btn-accent my-6">Log In</button>
            <div className={"flex-row"}>
                <span><a href={"#"}>Forgot password?</a></span>
                <span className={"float-right"}><a href={"/signup"}>Sign Up.</a></span>
            </div>
        </div>
    );
}

export default LogIn;
