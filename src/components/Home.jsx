import React from 'react'
import Data from '../Data/Questions.json'
import { NavLink } from 'react-router-dom'



export default function Home() {
  return (
    <div className="">
    <div className='m-10'>
        <div>
            <table className="w-full border-collapse text-white">
  <thead>
    <tr>
      <th className="px-4 py-3 text-left bg-gray-900 border border-gray-800">Title</th>
      <th className="px-4 py-3 text-left bg-gray-900 border border-gray-800">Difficulty</th>
      <th className="px-4 py-3 text-left bg-gray-900 border border-gray-800">Acceptance</th>
    </tr>
  </thead>
  <tbody>
    {Data.map((data, i) => (
    <tr className="bg-gray-800">
      <td className="px-4 py-3 border border-gray-700"><NavLink to={"/problem/"+data.title}>{data.title}</NavLink></td>
      <td className="px-4 py-3 border border-gray-700">{data.difficulty}</td>
      <td className="px-4 py-3 border border-gray-700">{data.acceptance}</td>
    </tr>))}

  </tbody>
</table>
</div>

    </div>
    </div>
  )
}
