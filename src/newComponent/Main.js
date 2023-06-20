import  Container  from './Container'
import React, { useEffect, useState } from 'react'
import "../App.css"
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import Tabs from '@mui/material/Tabs';
import PersonIcon from '@mui/icons-material/Person';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LogoutIcon from '@mui/icons-material/Logout';
function Main() {
   const [value, setValue] = useState(0);

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };
const url=`http://test.api.boxigo.in/sample-data/`
const [data,setData]=useState()
const [toggle,setToggle]=useState(true);
console.log(data)
 const getData=()=>{
    fetch(url).then(res=>res.json()).then(res=>setData(res.Customer_Estimate_Flow))
 }
 useEffect(()=>{
    getData()
 },[])


  return (
    <div>
      <div className='side-barrs'>
         <div className='side-nav'>
         <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', height: 224 ,width:150}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderLeft: 1, borderColor: 'error.main' }}
      >
        <span><AirportShuttleIcon/></span><Tab label="MY MOVES"  />
        <span><PersonIcon/></span><Tab label="LOGOUT"  />
        <span><NewspaperIcon/></span><Tab label="MY CONTAINER"  />
        <span><LogoutIcon/></span><Tab label="GET QUOTE"  />
     
        
      </Tabs>
     
      
      
    </Box>
         </div>
      
         <div>
      {
        data&&data.map((val,index)=>(
             <div key={index}><Container 
             
            moving_from={val.moving_from}
            moving_to={val.moving_to}
            property_size={val.property_size}
            total_items={val.total_items}
            distance={val.distance}
            moving_on={val.moving_on}
            estimate_id={val.estimate_id}
            value={{toggle,setToggle}}
            index={index}
            old_floor_no={val.old_floor_no}
            new_elevator_availability={val.new_elevator_availability}  
            new_parking_distance={val.new_parking_distance}  
            new_floor_no={val.new_floor_no}
            old_elevator_availability={val.old_elevator_availability}
            old_parking_distance={val.old_parking_distance}
            items={val.items.inventory}
            
            />
            
            
            
            
            </div>
        ))
        
        }
      </div>
      </div>
      
      
      
        </div>
  )
}

export default Main



