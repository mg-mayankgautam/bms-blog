import React from 'react'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
  
      <div className="App">
   
    <Outlet/>

    {/* <Footer/> */}
    </div>
    
  )
}

export default Layout
