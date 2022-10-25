import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className="menu">
        <div className="logo">Beer Mage</div>
        <div className="items">
            <a href="" className="listItem">Homepage</a>
            <a href="" className="listItem">About us</a>
            <a href="" className="listItem">Contact</a>
        </div>
        <div className="buttons">
            <button>Login</button>
            <button>Register</button>
        </div>
    </div>
  )
}

export default Header