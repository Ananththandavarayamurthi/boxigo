import React, { useState } from 'react'

function Listedcomponent({id,name,deletebutton}) {

    
    
      const [show,setshow]=useState(true)
      
  return (
    <div>
      
        <li value={id+1}><input
        type="checkbox"
        onClick={()=>setshow(!show)}
        /><span>{name}</span>{!show?<span>{deletebutton}</span>:null}</li>
        
      
      </div>
  )
}

export default Listedcomponent