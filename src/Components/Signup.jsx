import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <>
        <div className="bg-zinc-200  h-screen flex justify-center items-center">
            <div className="bg-white space-y-3 pl-10 h-96 w-[350px] flex flex-col justify-center rounded-lg shadow-black/30">
                <form className="space-y-3" action="">
                    <div>
                        <p className=" font-bold text-2xl tracking-wide">Create a New account</p>
                    </div>
                    <div className="mr-5">
                        <p className="text-zinc-600 font-semibold">EMAIL :</p>
                        <input className="outline-none h-10 border border-sm w-full px-5 rounded-md" type="email" placeholder="email" required />
                    </div>
                    <div className="mr-5">
                        <p className="text-zinc-600 font-semibold">PASSWORD :</p>
                        <input className="outline-none h-10 border border-sm w-full px-5 rounded-md" type="text" placeholder="password" required />
                    </div>
                    <div className="mr-5 ">
                        <button className="bg-yellow-400 h-10 w-full rounded-full hover:bg-yellow-600 duration-300 font-semibold">Sign Up</button>
                    </div>
                    <div>
                        <p className="text-zinc-400">Already a user ? - <span className="text-black font-bold  underline underline-offset-3"><Link to="/">Login </Link> </span></p>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
 
export default Signup;