import { Link, Route, Router, Routes } from "react-router-dom"


const Navbar = () => {
    return (
        
            <div className="bg-neutral-800 flex p-4 text-xl
            shadow-lg
            text-stone-300
            
        ">
                <div className="items-center w-full flex">
                    <div className="text-white cursor-pointer text-3xl px-4"><a href="/">LeetCode</a></div>
                    <div className="px-4 hover:text-white cursor-pointer h-full items-center flex" > <a href="/problems">problems</a></div>

                    <div className="px-4 hover:text-white cursor-pointer h-full items-center flex" > <a href="/about">about</a></div>
                </div>

                <div className="items-center
             hover:text-white 
             cursor-pointer px-4 flex">
                    Login
                </div>
                <div className="items-center
             hover:text-white 
             cursor-pointer px-4 flex">
                    Signup
                </div>
               
            </div>
        
    )
}

export default Navbar