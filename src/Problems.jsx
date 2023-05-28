import React, { useState } from 'react'
import './Problems.css'
import { Link } from 'react-router-dom'
import problems from './problemData'
const Problems = () =>{    
    //const [problems,setProblem] = useState(problems)
        const [currentPage, setCurrentPage] = useState(1); // Current page number
        const [itemsPerPage, setItemsPerPage] = useState(5); // Number of items to display per page
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentProblems = problems.slice(indexOfFirstItem, indexOfLastItem);
      
        // Change the current page
        const handlePageChange = (pageNumber) => {
          setCurrentPage(pageNumber);
        };
          return (
            <div>
            <table className='problemsTable'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Difficulty</th>
                  <th>Acceptance</th>
                </tr>
              </thead>
              <tbody>
                {currentProblems.map((row,index)=>(
                    <tr key={row.id} >
                        <td>{row.id}</td>
                        <td><Link  to={ `/problem/${row.id}`}>{row.title}</Link> </td>
                        <td id={row.difficulty}>{row.difficulty}</td>
                        <td>{row.acceptance}</td>
                    </tr>
                ))}
              </tbody>
              </table>
              <div className='Pagination'>
                {Array.from({length:Math.ceil(problems.length/itemsPerPage)}).map( (_,index)=>(
                  <button className="PageBtn" key={index} onClick={() => handlePageChange(index + 1)}>{index+1}</button>  
                ))}
              </div>
            
            
            </div>
     );
}

export default Problems;