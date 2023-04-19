import React from 'react'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({children}) => {
    if(!localStorage.getItem('token')){
        return <Navigate to="/login"   replace  />
    }
  return (
    <div>

        {children}
    </div>  
    )
}

export default RequireAuth