import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className="menu">
        <div className="logo"><span>Beer</span> Mage<span className='v1'> v. 1.1</span></div>
        <div className="items">
            <a href="" className="listItem">Top 10</a>
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