

const Navbar = ()=>{
    return(
        <div className="bg-neutral-800 flex p-4 text-xl
            shadow-lg
            text-stone-300
            
        ">
            <div className="items-center w-full flex">
                <div className="text-white cursor-pointer text-3xl px-4">LeetCode</div>
                <div className="px-9 hover:text-white cursor-pointer h-full items-center flex">problems</div>
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