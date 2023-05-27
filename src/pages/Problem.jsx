import React from 'react'
import { useParams } from 'react-router-dom'

const Problem = () => {
    const { problemId } = useParams()
  return (
    <div>Problem {problemId}</div>
  )
}

export default Problem