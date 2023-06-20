import React, { useState } from 'react'
import "./container.css"
import HomeIcon from "@mui/icons-material/Home"
import { deepOrange } from '@mui/material/colors';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MapIcon from '@mui/icons-material/Map';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditIcon from '@mui/icons-material/Edit';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import WarningIcon from '@mui/icons-material/Warning';
import Innventory from './Innventory';
function Container({moving_from,
    moving_to,
    property_size,
    total_items,
    distance,
    moving_on,
    estimate_id,
    old_floor_no,
    new_elevator_availability,
    new_parking_distance,  
    new_floor_no,
    old_elevator_availability,
    old_parking_distance,
    items,
}) {
    const [toggle,setToggle]=useState(false)
    
   
    
  return (
    <div>
        
        <div className='head-container'>

            <div className='container'>
                <div className='heading'>
                    <h2>From</h2> 
                    <p>{moving_from}</p>                   
                </div>
               
                    
                        <div class="direction" >
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAMCAYAAABvEu28AAAABHNCSVQICAgIfAhkiAAAAIhJREFUKFNjZCABvAuxWi605lgkNi2MJJgDVvou1Pq/0OqjGPpINgiXYWQZhM0wsg1CN4wRFICkhhOyekYGRm+2fz/UQQZFkGvQv///9ZmYmDyFVh81INtrb4Mt3RmYGAuFVx/zADmELIPQDSHLIGyGkGwQLkNIMuirn7XUb3YGbYHVR3djixwAzdU0oEX2M0UAAAAASUVORK5CYII=" class="img-fluid" alt=""/>
                    
                    
                       </div>
                <div className='heading'>
                    <h2>
                        TO
                    </h2>
                    <p>{moving_to}</p>

                </div>
                <div className='heading'>
                    <h2>Request#</h2>
                    <p className="request">{estimate_id}</p>
                </div>

            </div>
            <div className='sec-container'>
                <div><p>
                <HomeIcon sx={{ color: deepOrange[500] }} />
                    {property_size}
                    </p></div>
                    <div>
                        <p>
                    <ApartmentIcon sx={{ color: deepOrange[500] }} />
                  {total_items}
                    
                    </p></div>
                    <div><p>
                    <MapIcon sx={{ color: deepOrange[500] }} />
                   {distance}
                    
                    </p></div>
                    <div><p>
                    <CalendarMonthIcon sx={{ color: deepOrange[500] }} />

                        
                                            {moving_on}
                                            < EditIcon  sx={{ color: deepOrange[1000] }} />
                    

                    
                    </p></div>
                    <div><p>
                    <CheckBoxIcon sx={{ color: deepOrange[500] }} />

                    is Flexible
                    
                    </p></div>
                    <div><button className='button1' onClick={()=>setToggle(!toggle)}>
                        view move details</button>
                  </div>
                  <div><button className='button2'>
                        Quotes Awaiting</button>
                  </div>
                

            </div>
            <div className="third-container">
                <h3>
                    <b><WarningIcon sx={{ color: deepOrange[500] }} /> 
                    DISCALIMER:</b> 
                    <span className='warning'>please updata your move date before two day of shifting</span>
                </h3>
                

            </div>
            </div>
            {toggle?<Innventory
            old_floor_no={old_floor_no}
            new_elevator_availability={new_elevator_availability}  
            new_parking_distance={new_parking_distance}  
            new_floor_no={new_floor_no}
            old_elevator_availability={old_elevator_availability}
            old_parking_distance={old_parking_distance}
            items={items}
            />:null}
            
    </div>
  )
}

export default Container;

