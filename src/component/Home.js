// import React, { useEffect, useState} from 'react'



// function Home() {
//   const [data,setData]=useState();
  
//   const[searchTerm,setSearchTerm]=useState("");



//   const url="https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json"

//   const getData=()=>{
//      fetch(url,{
//       METHOD:"GET"
//      }).then((res)=>res.json())
//      .then((res)=>setData(res))
//   }
//   useEffect(()=>{
//     getData()
//   },[])
 
  
//   return (

//     <div>
//       <div><input
        
//         clearable
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       /></div>

//         <table className="table">
//   <thead>
//     <tr>
//       <th scope="col">YEAR</th>
//       <th scope="col">TITLE</th>
//       <th scope="col">DESCRIPTION</th>
//     </tr>
//   </thead>
//   <tbody>
//      {data?.filter((val)=>{
//   if(searchTerm ===""){
//     return val
//   }
//   else if(val.year.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())){
//     return val;
//   }
//   else if(val.title.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())){
//     return val;
//   }
//   else if(val.description.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())){
//     return val;
//   }
// }).map((e,i)=>(
//         <tr key={i}>
//         <td >{e.title}</td>
//         <td>{e.year}</td>
//         <td>{e.description}</td>
        
//       </tr>
//     ))}
    
    
//   </tbody>
// </table>
        
//     </div>
//   )
// }

// export default Home

// import React, { useEffect, useState } from 'react'

// function Home() {

//   const[searchTerm,setSearchTerm]=useState("");

//     const [data,Setdata]=useState([]);
//     console.log(data)


    
//     const data1=Object.keys(data).reduce((acc,val)=>{
//           acc[val.toUpperCase()]=data[val]
//       return acc
//     },{})

//     console.log("upper",data1)

//   //   const capital = obj =>
//   // Object.keys(obj).reduce((acc, index) => {
//   //   acc[index.toUpperCase()]=obj[index];
//   //   return acc;
//   // }, {});
//   const url="https://dog.ceo/api/breeds/list/all"
//   const getData=()=>{
//     fetch(url)
//     .then(res=>res.json())
//     .then(res=>Setdata(res.message))
//   }
//   useEffect(()=>{
//   getData()  
//   },[])

//   return (
//     <div>
// <div>    <input
        
//                 clearable
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               /></div>

//         <table className="table">
//   <thead>
//     <tr>
//       <th scope="col">name</th>
//       <th scope="col">breed</th>
      
      
//     </tr>
//   </thead>
//   <tbody>
//      {data1?Object.entries(data1).filter((val)=>{
//   if(searchTerm ===""){
//     return val
//   }
//   else if(val[0].toString().toLowerCase().includes(searchTerm.toString().toLowerCase())){
//     return val;
//   }
//   else if(val[1].toString().toLowerCase().includes(searchTerm.toString().toLowerCase())){
//     return val;
//   }
  
  
// }).map((key,value)=>(
//       <tr>
//       <td >{key[0]}</td>
//       <td >{key[1].map((e)=>(<div>{e}</div>))}</td>
//     </tr>

//      )):data1}

    
    
//   </tbody>
// </table>

//     </div>
//   )
// }

// export default Home


import React, { useState } from 'react'
import {Link} from "react-router-dom"
import Listedcomponent from './Listedcomponent'
import Dropdown from 'react-bootstrap/Dropdown';



function Home() {

const arr=["ananth","ashok","bharathi"]
const [data,setData]=useState(arr)
   

const handledelete=(i)=>{
const newData=[...data]
   newData.splice(i,1)
   setData(newData)

}
const [toggle,setToggle]=useState(false)
const [value,setValue]=useState()
const [city,setcity]=useState()
console.log(value)
const country=[{
      name:"india",
      code:"IN",
      city:[
        "chennai",
        "trichy"
      ]
},
{
  name:"london",
  code:"LN",
  city:[
    "villupram",
    "cuddlor"
  ]
},
{
  name:"malasia",
  code:"ML",
  city:[
    "che",
    "difbdoaiub"
  ]
},
]
const checkcity=country.filter(val=>{
  if(val.name===value){
    return val
  }
})

console.log(checkcity[0]?checkcity[0].city:null)


  return (
    <div>
            <Link to="/photos"><button>movies</button></Link>
            <Link to="/post"><button>post</button></Link>
            {
              data&&data.map((val,i)=>{
                return <ol key={i+1} ><Listedcomponent id={i}
                  
                  name={val}
                  deletebutton={
                    <button onClick={()=>handledelete(i)}>delete</button>
                     }


                
                />
                </ol>
              })
            }
            

            
            <Dropdown >
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {value?value:"select"}
      </Dropdown.Toggle>

      <Dropdown.Menu >

        {country.map((val,i)=>{
            return <Dropdown.Item onClick={()=>setValue(val.name)} key={i}>
              {val.name}

              
            </Dropdown.Item>
        })
        
}
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      
    <Dropdown.Toggle variant="success" id="dropdown-basic">
        {city?city:null}
     </Dropdown.Toggle>

       <Dropdown.Menu>
         {checkcity[0]?(checkcity[0].city.map(val=>{
            return <Dropdown.Item onClick={()=>setcity(val)} >
              {val}
            </Dropdown.Item>
        })):null
        
}
      </Dropdown.Menu>
    </Dropdown>





        
            

    </div>
  )
}

export default Home