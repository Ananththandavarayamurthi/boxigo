import React, { useState } from 'react'
import "./inventory.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { brown,red,grey } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';







function Innventory({old_floor_no,
    new_elevator_availability,
    new_parking_distance,
    new_floor_no,
    old_elevator_availability,
    old_parking_distance,
    items,
    value
    
}){

  return (
   
    <div>
        <div>{value}</div>
        <div className='head-container'>
        <div className="container">
            <div className='sub-container'>
            <h3>
            <b>Additional Information </b>
            </h3>
            <p>Test data</p>
            </div>
            
            <button>Edit Additional info</button>
        </div>
        <div className="container">
            <div className='sub-container'>
            <h3>
            <b>House Details </b>
            </h3>
            
            </div>
            
            <button>Edit House Details</button>
        </div>
        </div>
        <div className='sec-inven-container'>
               <div className='house'>
                <p>
                    <b>Existing House Details</b>
                </p>
                <div className='sec-sub-container'>
                <div >
                    <b>Floor NO</b>
                    <p>{old_floor_no}</p>
                </div>
                <div>
                    <b>Elevator Available</b>
                    <p>{old_elevator_availability}</p>
                </div>
                <div>
                    <b>Distance from elevator/Staircase to truck</b>
                    <p>{old_parking_distance}</p>
                </div>
                </div>
                </div>
                <div className='house'>
                <p>
                    <b>New House Details</b>
                </p>
            <div className='sec-sub-container'>
                <div>
                    <b>Floor Number</b>
                    <p>{new_floor_no}</p>
                </div>
                <div>
                    <b>Elevator Available</b>
                    <p>{new_elevator_availability}</p>
                </div>
                <div>
                    <b>Distance from elevator</b>
                    <p>{new_parking_distance}</p>
                </div>
                </div>
                </div>
        </div>
        <div className="container">
            <div className='sub-container'>
            <h3>
            <b>Inventory details </b>
            </h3>
            
            </div>
            
            <button>Edit inventory</button>
        </div>
       
       
       {items.map((item) => (
        
        <div key={item.id}>
          
          <Accordion sx={{width:900,background:brown[50] }}>
             <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              
              <Typography sx={{color:red[400]}} >
                <h2><b>{item.displayName}</b>
                </h2>
                 <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                (
            {item.category.reduce((totalQty, category) => {
              return (
                totalQty +
                category.items.reduce((categoryQty, item) => {
                  return categoryQty + item.qty;
                }, 0)
              );
            }, 0)}
            )
                    
                     </span> 
                
                </Typography>
            </AccordionSummary>
            
            
            
            
          {item.category.map((category) => {
           
             const hasItemsWithQty = category.items.some((item) => item.qty > 0);
              
             return hasItemsWithQty ?(<div key={category.displayName}>
              
              <AccordionDetails sx={{width:900,background:grey[50] }}>
              <Typography>
                <div className='main-inventory'>
              
               
                
                  
                <div className='sec-list'>
                    <h3><b>{category.displayName}</b></h3>
                <div className='sec-inventory'>
                {category.items.map((item) => (
                  
                <div key={item.id}>
                  
                  {item.qty > 0 ?
                  // categoryTotalQty = setitem.qty
                  (<div>
                    <div className="sec-child-inventor">
                  <div >
                  <p> {item.name}</p> 
                  
                      <p><b>
                        {item.type &&
                    item.type
                      .filter((type) => type.selected === true)
                      .map((type) => (
                        <p key={type.option}>Type: {type.option}</p>
                      ))}</b></p>
                  </div>
                  <div><b>{item.qty}</b></div>
                  </div>
                 
                  
                  </div>

                  
                  )
                  
                  :null}
                  
                </div>
              ))}
                
                   
                </div>
                </div>
                </div>
              </Typography>
            </AccordionDetails>
              
            </div>):null;
            
})}
          </Accordion> 
        </div>
      ))}

     </div>
  )
}


export default Innventory




