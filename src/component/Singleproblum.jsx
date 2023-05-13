import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useContext } from 'react'
import { Problumset } from './context'
const Singleproblum = () => {
    const {data} = useContext(Problumset)
    const x = useParams()
    const [singlequestion,setsinglequestion]= useState(x.id) 
    const [singledata,setsingledata]= useState(data) 
    // console.log(x.id)
    useEffect(()=>{
    //   setsinglequestion(x.id)
      console.log(singlequestion)
      const fil = singledata.filter((e)=>{
        
        if(e.title == singlequestion ){
            console.log(e)
            return e
        }
      })
      setsingledata(fil)
      console.log(fil)

    },[])
    // setsinglequestion(x.id)
  return (
    <div>
        <Link to={'/Problumset/all'} >Back</Link>

        <table>
            <tr>
                <th>Title</th>
                <th>Acceptance</th>
                <th>Difficulty</th>
           </tr>
           {singledata.map((m)=>{
              return (
                <tr>
                    <td>{m.title}</td>
                    <td>{m.acceptance}</td>
                    <td>{m.difficulty}</td>
                </tr>
              )
           })}
            
        </table>
     
    </div>
  )
}

export default Singleproblum
