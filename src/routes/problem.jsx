import React from 'react'
import { useParams } from 'react-router-dom'

export default function Problem() {
    const { id } = useParams();
  return (
    <div>
      <h1> problem {id} </h1>
    </div>
  )
}
