import React from 'react'
import { useContext } from 'react'
import { Problumset } from './context'
const login = () => {
  const {data} = useContext(Problumset)
  console.log(data)
  return (
    <div>
    
    </div>
  )
}

export default login
