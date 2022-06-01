import React from 'react'
import {Routes,Route,Navigate  } from 'react-router-dom';
import Content from './component/content/Content';
import Details from './component/content/Details';
import Worksamples from './component/content/Worksamples'
const RoutPage = () => {
  return (
    <div>
        <Routes>
                <Route path="/" exact element={<Content/>}/>
                <Route path="/Details/:id"  element={<Details/>}/>
                {/* <Navigate  to="/" /> */}
                {/* <Route path="/Worksamples/:id" element={<Worksamples/>}/> */}
        </Routes> 
    </div>
  )
}

export default RoutPage