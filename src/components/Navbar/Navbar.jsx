import './navbar.css'

const Navbar=()=>{
    return (
        <div className="container">

            <div className="logo">
                <h4>Leet<span>Code</span></h4>
            </div>
            <div className='menu'>
                <ul>
                    <a href="/login"><li >login </li></a>
                    <a href="/signup"><li >signup </li></a>
                    <a href="/problemset/all"><li >problems </li></a>
                    {/* <a href="/problemset/1"><li >signup </li></a> */}
                    
                    <button href="/login">Login</button>
                    <button href="/signup">Signup</button>
                    
                </ul>
             </div>

        </div>
    ) 
}

export default Navbar;