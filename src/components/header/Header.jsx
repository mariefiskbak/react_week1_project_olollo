import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className="menu">
        <div className="logo"><span>Beer</span> Mage<span className='v1'> v. 1.1</span></div>
        <div className="items">
            <a href="" className="listItem">Get the App</a>
            <a href="" className="listItem">Top 10</a>
            <a href="" className="listItem">About us</a>
            <a href="" className="listItem">Contact</a>
        </div>
        <div className="buttons">
            <Link to="/admin">
            <button>Admin site</button>'
            </Link>
        </div>
    </div>
  )
}

export default Header