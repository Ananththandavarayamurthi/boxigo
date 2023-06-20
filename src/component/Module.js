
// import React, { useState,useEffect } from 'react'

// import "./module.css"




// function Module() {
// const [file,setFile]=useState();
// console.log(file&&file)
//  const url="http://test.api.boxigo.in/sample-data/"

//     const getdata=()=>{
    
//         fetch(url).then(res=>res.json()).then(res=>setFile(res.Customer_Estimate_Flow))
           
// }
//     useEffect(()=>{
//         getdata()
//     },[])
//   return (
//     <div>
//         {file?file.map((e)=>(
//         <div>{e.moving_from}</div>
//         )):null}
// <form name="property_info_form" id="estimatePropertyInfo" method="POST" novalidate="" autocomplete="off">
    

// <h2> From house details </h2>
// <div className="row"><div className="col-12">
// <div className="form-group">


// <button className='move-details-container'>View More Details</button>
// <button className='btn'>Quates Awaiting</button>


//  </div>
//  </div>
//  </div>
//  </form>

//           </div>
//   )
// }

// export default Module


import React, { useState } from 'react';
import Columnfilteredmethod from './Columnfiltermethod';

// Reusable Table component
const Table = ({ columns, data,columnsbody,handleIndividualColumnFilterChange, globalFilter, individualColumnFilter, sorting, pagination, refresh }) =>
 

{
  
  let dataoffiletred=columnsbody&&columnsbody.filter((val)=>{
            
    if(globalFilter===""){
        return val
    }
    else if(val.name.toString().toLowerCase().includes(globalFilter.toString().toLowerCase())){
        return val
    }
   
    else if(val.age.toString().toLowerCase().includes(globalFilter.toString().toLowerCase())){
        return val
    }
    else if(val.language.toString().toLowerCase().includes(globalFilter.toString().toLowerCase())){
        return val
    }
    else if(val.batch.toString().toLowerCase().includes(globalFilter.toString().toLowerCase())){
        return val
    }
    else if(val.gender.toString().toLowerCase().includes(globalFilter.toString().toLowerCase())){
        return val
    }
    else if(val.job.toString().toLowerCase().includes(globalFilter.toString().toLowerCase())){
        return val
    }}
  )
  

 


   
  return (
    <div>
        

      <table class="table">

  <thead>
    
    <tr>
    
    {
        columns.map(val=>{
            return <th scope="col">{val}
            <Columnfilteredmethod 
        dataoffiletred={dataoffiletred&&dataoffiletred}
     
          placeholder="search"
/>
            </th>
        })
    }
      
    </tr>
  </thead>
  <tbody>
    {
        
            
        dataoffiletred&&dataoffiletred.map(val=><tr>
          {console.log(val)}
          <th scope="row">{val.name}</th>
          <td>{val.age}</td>
          <td>{val.batch}</td>
          <td>{val.language}</td>
          <td>{val.gender}</td>
          <td>{val.job}</td>
          
        </tr>)
            

            
       
    }

    
  </tbody>
</table>
    </div>
  );
};


// Screen 1
const Screen1 = () => {
  const columns = ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5', 'Column 6'];
  const columnsbody=[
    {
      name:"ananth",
      age:24,
      batch:"b39",
      language:"tamil",
      gender:"male",
      job:"developer"

      
    },
    {
      name:"ashok",
      age:23,
      batch:"b32",
      language:"hindi",
      gender:"male",
      job:"teseter"

      
    },
    {
      name:"priya",
      age:20,
      batch:"b35",
      language:"english",
      gender:"female",
      job:"designer"

      
    },
    ]
  const data = []; // Provide data for Screen 1 table

  const [globalFilter, setGlobalFilter] = useState('');
 
  const handleGlobalFilterChange = (e) => {
    setGlobalFilter(e.target.value);
  };

  

  return (
    <div>
        <input placeholder='global filter'
         onChange={(e)=>handleGlobalFilterChange(e)}/>
      {/* Table 1 */}
      <Table
        columns={columns}
        columnsbody={columnsbody}
         data={data}
        globalFilter={globalFilter}
        sorting={false}
        pagination={true}
        refresh={false}
      />
    </div>
  );
};

// Screen 2
const Screen2 = () => {
  const columns = ['Column 1', 'Column 2', 'Column 3', 'Column 4'];
  const data = []; // Provide data for Screen 2 table

  const [sorting, setSorting] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const handleSortingChange = () => {
    setSorting(!sorting);
  };

  const handleRefreshClick = () => {
    setRefresh(true);
  };

  return (
    <div>
      {/* Table 2 */}
      <Table
        columns={columns}
        data={data}
        globalFilter={false}
        individualColumnFilter={{}}
        sorting={sorting}
        pagination={false}
        refresh={refresh}
      />
    </div>
  );
};

// App component
const Module = () => {
  const [activeScreen, setActiveScreen] = useState(1);

  const handleScreenChange = (screenNumber) => {
    setActiveScreen(screenNumber);
  };

  return (
    <div>
      <button onClick={() => handleScreenChange(1)}>Screen 1</button>
      <button onClick={() => handleScreenChange(2)}>Screen 2</button>

      {activeScreen === 1 && <Screen1 />}
      {activeScreen === 2 && <Screen2 />}
    </div>
  );
};

export default Module;
