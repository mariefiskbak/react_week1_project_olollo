import React from 'react'
import './navbar.css'
import * as FaIcons from 'react-icons/fa'
import * as FcIcons from "react-icons/fc";
import * as Md from "react-icons/md";
import { Link } from 'react-router-dom'



const Navbar = () => {
    

  return (
    <div className="Page">
      <div className="navbar">
        <div className="navLogo">
          <p className='p1'>Beer Mage</p>
          <p className='p2'>Brewery manager</p>
          <p className='p3'>Version 1.1</p>
        </div>
        <div className="navItem">
          <Md.MdDashboard className='icon'/>
          <p>Dashboard</p>
        </div>
        <div className="navItem">
          <Md.MdStorefront className='icon'/>
          <p>My Brewery</p>
        </div>
        <div className="navItem">
          <FaIcons.FaBeer className='icon'/>
          <p>Manager</p>
        </div>
        <div className="navItem">
          <FaIcons.FaChartBar className='icon'/>
          <p>Statistics</p>
        </div>
        <div className="navItem">
          <Md.MdOutlineSettings className='icon'/>
          <p>Settings</p>
        </div>
        <div className="navItem">
          <Md.MdOutlineSupportAgent className='icon'/>
          <p>Support</p>
        </div>
        <div className="navItem navLogOut">
          <Md.MdLogout className='icon'/>
          <button className='logOut'>Sign Out</button>
        </div>
        <div className="navFooter">
        
        </div>
        
        
   
    
      </div>

      <div className="content">
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>

      </div>

        
    </div>
  )
}

export default Navbar