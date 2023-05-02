import './navbar.css'

const Navbar=()=>{
    return (
        <div className="container">

            <div className="logo">
                <h4>Leet<span>Code</span></h4>
            </div>
            <div className='menu'>
                <ul>
                    <a href="/problemset/all"><li >problems </li></a>
                    <a href="/login"><li >login </li></a>
                    <a href="/signup"><li >signup </li></a>
                    
                </ul>
             </div>

        </div>
    ) 
}

export default Navbar;