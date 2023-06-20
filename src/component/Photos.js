import React from 'react'
import { useState,useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"

function Photos() {
   const url="https://movie-back-end.onrender.com/movies/api"
   const[data,setData]=useState()
   const [searchTerm,setSearchTerm]=useState("")
   const navigate=useNavigate()

  // const data1=data?.filter((val)=>{
  //   if(searchTerm===""){
  //     return val
  //   }
  //   else if(searchTerm.toString().toLowerCase().includes(val.name.toString().toLowerCase())){
  //     return val
  //   }
  //   return val
  // })
  // console.log("vikram",data1)
   const getData= async()=>{
        const data=await fetch(url)
        const data1=await data.json()
         setData(data1)
   }
   const handledelete= async (id)=>{
      try {
        const {data}  =await axios.delete(`${url}/${id}`)
          if(data.message==="movie deleted successfully"){
            navigate("/post")
          }
        getData()
        
        console.log("delete",data)
        
          
      
      } catch (error) {
        console.log(error)
      }
   }
   useEffect(()=>{
    getData()
   },[])

   console.log(data)
  return (

    <div>
      <input
      placeholder='searach movie'
      onChange={(e)=>setSearchTerm(e.target.value)}
      />
    <div style={{display: "flex",flexWrap: "wrap", justifyContent: "space-around"}}>
       {data?.filter((val)=>{
    if(searchTerm===""){
      return val
    }
    else if(val.name.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())){
      return val
    }
    
  }).map((val,index)=>(
        <div className="card" style={{width: "18rem"}}>
        <img src={val.poster} className="card-img-top" alt={val.name}/>
        <div className="card-body">
          <h5 className="card-title">{val.name}</h5>
          <p className="card-text">Rating: {val.rating}</p>
          <button onClick={()=>handledelete(val._id)}>delete</button>
          
        </div>
      </div>
       
        
       ))}
</div>
</div>
  )
}

export default Photos