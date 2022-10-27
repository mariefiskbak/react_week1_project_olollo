import React from 'react'
import './beerProfile.css'

const BeerProfile = () => {
  return (
    <div>
        <div className='spacer'></div>
        <div className='profileBack'>
            <p className="bTitle"></p>
            <div className="display">
                <div className="area1">
                    <p>Farve og klarhed</p>
                    <div className="area">
                        <div className="areaSlider slider"></div>
                    </div>
                </div>
                <div className="area2">
                    <p>Krop og Mundfølelse</p>
                    <div className="area">
                        <div className="areaSlider slider2"></div>
                    </div>
                </div>
                <div className="area3">
                    <p>Frugtighed</p>
                    
                    <div className="area">
                        <div className="areaSlider slider3"></div>
                    </div>
                </div>
                <div className="area4">
                    <p>Bitterhed</p>
                    <div className="area">
                        <div className="areaSlider slider4"></div>
                    </div>
                </div>
        
            </div>
        </div>


    </div>
        
    
  )
}

export default BeerProfile