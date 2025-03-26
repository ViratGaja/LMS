import React from 'react'
import { assets, dummyEducatorData } from '../../assets/assets'
import { UserButton,useUser } from '@clerk/clerk-react'



const Navbar = () => {

  const educatorData=dummyEducatorData
  const {user}=useUser()
  return (
    <div>
      <Link to='/'>
      <img src={assets.logo} alt="" />
      </Link>
        <h1>JEllo</h1>
    
    </div>
  )
}

export default Navbar
