import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const navbar = () => {

  return (
    <>    
    <div>
     <div className="navbar">
        <div className="nav-left">
           <Link className='title'  to={'/'} ><h2 >leetcode</h2></Link> 
        </div>
        <div className="nav-right">
            <ul>
             <Link className='link' to={'Problumset/all'}><li>Problum</li></Link>  
             <Link className='link' to={'login'}><li>Login</li></Link>  
              <Link className='link'  to={'singup'} ><li>Singup</li></Link>  
            </ul>
          
        </div>
     </div>
     <Outlet/>
    </div>
    </>

  )
}

export default navbar
