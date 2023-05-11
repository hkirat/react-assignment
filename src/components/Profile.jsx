import React from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom';
export default function Profile() {
    const auth = useAuth();
    const navigate = useNavigate();
    const handleLogout=()=>{
        auth.logout();
        navigate('/login');
    }
  return (<div>
    <button onClick={handleLogout} className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Logout</button>
</div>
  )
}
