import { useEffect, useState } from "react";

const Columnfilteredmethod=({dataoffiletred,columndata})=>{
    const [individualColumnFilter, setIndividualColumnFilter] = useState("");
  
    const handleIndividualColumnFilterChange = (value) => {
      
      setIndividualColumnFilter(value.target.value);
    };
    const columnfilter=dataoffiletred.filter((va)=>{
        if(individualColumnFilter===""){
          return va
        }
        else if(va.name.toString().toLowerCase().includes(individualColumnFilter.toString().toLowerCase())){
          return va
        }
        else if(va.age.toString().toLowerCase().includes(individualColumnFilter.toString().toLowerCase())){
            return va
          }
          else if(va.gender.toString().toLowerCase().includes(individualColumnFilter.toString().toLowerCase())){
            return va
          }
          else if(va.job.toString().toLowerCase().includes(individualColumnFilter.toString().toLowerCase())){
            return va
          }
          else if(va.language.toString().toLowerCase().includes(individualColumnFilter.toString().toLowerCase())){
            return va
          }
      })
      useEffect(()=>{
        columndata&&columndata(columnfilter)
      },[individualColumnFilter])
      
      
    return(
      <div>
          <input 
          placeholder='search column'
          onChange={(e)=>handleIndividualColumnFilterChange(e)}
          
          />
      </div>
    )
  }

  export default Columnfilteredmethod