import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as FcIcons from "react-icons/fc";
import * as Md from "react-icons/md";
import { Link } from 'react-router-dom';
import '../../admin.css'



const Navbar = () => {

  
    

  return (
    <>
        <div className="navLogo">
          <p className='p1'>Beer Mage</p>
          <p className='p2'>Brewery manager</p>
          <p className='p3'>Version 1.1</p>
        </div>
        <Link  to="/admin" style={{ textDecoration: 'none' }}>
        <div className="navItem" id={window.location.pathname == "/admin" ? "active" : ""}>
          <Md.MdDashboard className='icon'/>
          <p>Dashboard</p>
        </div>
        </Link>
        
        <Link to="/admin/mybrewery" style={{ textDecoration: 'none' }}>
        <div className="navItem" id={window.location.pathname == "/admin/mybrewery" ? "active" : ""}>
          <Md.MdStorefront className='icon'/>
          <p>My Brewery</p>
        </div>
        </Link>

        <Link to="/admin/manager" style={{ textDecoration: 'none' }}>
        <div className="navItem" id={window.location.pathname == "/admin/manager" ? "active" : ""}>
          <FaIcons.FaBeer className='icon'/>
          <p>Manager</p>
        </div>
        </Link>

        <Link to="/admin/statistics" style={{ textDecoration: 'none' }}>
        <div className="navItem" id={window.location.pathname == "/admin/statistics" ? "active" : ""}>
          <FaIcons.FaChartBar className='icon'/>
          <p>Statistics</p>
        </div>
        </Link>

        
        <Link to="/admin/settings" style={{ textDecoration: 'none' }}>
        <div className="navItem" id={window.location.pathname == "/admin/settings" ? "active" : ""}>
          <Md.MdOutlineSettings className='icon'/>
          <p>Settings</p>
        </div>
        </Link>

        <Link to="/admin/support" style={{ textDecoration: 'none' }}>
        <div className="navItem" id={window.location.pathname == "/admin/support" ? "active" : ""}>
          <Md.MdOutlineSupportAgent className='icon'/>
          <p>Support</p>
        </div>
        </Link>

        <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="navItem navLogOut">
          
          <Md.MdLogout className='icon'/>
          <button className='logOut'>Sign Out</button>
        </div>
        </Link>
        <div className="navFooter"></div>
      </>
  )
}

export default Navbar