function SignUp() {
    return (
        <div className="form-control w-full max-w-xs mx-auto">
            <h1 className="text-4xl font-bold text-center my-6">SIGN UP</h1>
            <label className="label">
                <span className="label-text">Enter Email</span>
            </label>
            <input type="text" placeholder="example@gmail.com" className="input input-bordered w-full max-w-xs" />
            <label className="label">
                <span className="label-text">Enter Password</span>
            </label>
            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
            <div className="form-control">
                <label className="cursor-pointer label">
                    <span className="label-text">I agree to xyz</span>
                    <input type="checkbox" className="checkbox checkbox-accent" />
                </label>
            </div>
            <button className="btn btn-outline btn-accent">Sign-Up</button>
        </div>
    );
}

export default SignUp;
