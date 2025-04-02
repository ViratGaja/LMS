import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Educator/Navbar'
const Educator = () => {
  return (
    <div>
    <div className='text-default min-h-screen bg-white'
    >
      <Navbar/>
    </div>
      <div>
        <Outlet />
      </div>
      
    </div>
  )
}

export default Educator
