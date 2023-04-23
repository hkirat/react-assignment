import React from 'react'

function Allproblems(props) {
 const { title, difficulty, acceptance } = props;
 return (
  <tr>
   <td>{title}</td>
   <td>{difficulty}</td>
   <td>{acceptance}</td>
  </tr>
 )
}

export default Allproblems