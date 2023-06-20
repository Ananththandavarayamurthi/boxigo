import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Main from './newComponent/Main'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      
      <Route path="/main" element={<Main/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
   
    
  )
}

export default App