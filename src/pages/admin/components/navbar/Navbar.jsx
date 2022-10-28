import React from 'react'
import './navbar.css'



const Navbar = () => {
    

  return (
    <div className="Page">
        <div className="Navbar">
          <ul>
            {NavBarData.map((val, key) => {
              return <li key={key} onClick={() => {window.location.pathname = val.link}}>
              {" "}
              <div>{val.icon}</div>{" "}
              <div>
                {val.title}
              </div>
              </li>
            })}
          </ul>
        </div>
    </div>
  )
}

export default Navbar