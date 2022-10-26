import React from 'react'
import './footer.css'
import Image from '../../images/mikro.png'

const Footer = () => {
  return (
    <div className='bottom'>
      <div className="text">
      <p>Copyright © 2022 Beer Mage. All rights reserved</p>
      <p>Based in Denmark, Bornholm</p>
      </div>
      <div className="image">
        <img src={Image} alt="" />
      </div>
    
    </div>
  )
}

export default Footer