import React from 'react'
import { createContext ,useState} from 'react'
export const Problumset = createContext()
const problems = [{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
},{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "412%"
},
    {
        title: "202. Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%"
    },
    {
        title: "203. Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%"
    }];
const context = ({children}) => {
    const [data,setdata] = useState(problems)
   
  return (
    <div>
        <Problumset.Provider value={{data,setdata}} >
            {children}
        </Problumset.Provider>

      
    </div>
  )
}

export default context
