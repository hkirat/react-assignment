import React from 'react'
import { useContext ,useState} from 'react'
import { Problumset } from './context'
import { Link } from 'react-router-dom'
const problumset = () => {
    const {data} = useContext(Problumset)
    const [page,setPage] = useState(1)
    const [btncolor,setBtncolor] = useState('grey')
   
    const handelbtn = (x)=>{
      setPage(x)
    }

  return (
    <div>  
     <table>
    <tr>
        <th>Title</th>
        <th>Acceptance</th>
        <th>Difficulty</th>
    </tr>
    
  
 
        {data.slice(page*2-2,page*2).map((e,i)=>{
       const {title,difficulty,acceptance} = e
       return (
        <tr>
          
        <Link className='link' to={`/problum/${title}`}>
        
        <td>{title}</td>
        </Link>
        <td>{acceptance}</td>
        <td>{difficulty}</td>
       
       </tr>
       
        
       )
      })}
      </table>
     <div className="btns">
      {[...Array(data.length/2)].map((e,i)=>{
       return <button 
       className={`${page==i+1?"paganation__selected":''} button`}
       
       
       onClick={()=>handelbtn(i+1)} >{i+1}</button>
      })}
     
      </div>
    </div>
  )
}

export default problumset
