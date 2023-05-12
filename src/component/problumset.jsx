import React from 'react'
import { useContext ,useState} from 'react'
import { Problumset } from './context'
const problumset = () => {
    const {data} = useContext(Problumset)
    const [btn,setBtn] = useState(data.length/2)
    const [initialValue,setInitialValue] = useState(0)
   
    const handelbtn = ()=>{
        const y = data.length
        setBtn(y/2)
        setInitialValue(0)
    }
    const handelbtn2 = ()=>{
        const y = data.length
        setInitialValue(y/2)
        setBtn(y)
    }
  return (
    <div>   <table>
    <tr>
        <th>Title</th>
        <th>Acceptance</th>
        <th>Difficulty</th>
    </tr>
    
  
 
        {data.slice(initialValue,btn).map((e,i)=>{
       const {title,difficulty,acceptance} = e
       return (
        <tr>
        <td>{title}</td>
        <td>{acceptance}</td>
        <td>{difficulty}</td>
    </tr>
        
       )
      })}
      </table>
     
      <button onClick={handelbtn} >1</button>
      <button onClick={handelbtn2} >2</button>
    </div>
  )
}

export default problumset
