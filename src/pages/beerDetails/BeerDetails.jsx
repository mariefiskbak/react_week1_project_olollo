import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import Header from '../../components/header/Header';
import './beerDetails.css'
import BeerProfile from '../../components/beerProfile/BeerProfile'



const BeerDetails = (props) => {

    const location = useLocation()
    console.log(props, "props");
    console.log(location, "useLocation Hook")
    const beer = location.state.data

    
    
  return (
    
    <div>
        <Header/>
        <div className='show'>
          <div className="back"></div>
          <div className='items'>
            
            <Link className='return' to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </Link>

            <img className='leftBeer' src={beer.image}></img>
            <div className='rightBeer'>
              <p className='beerTitle'>{beer.name}</p>
              <p className='beerSubTitle'>by {beer.brewery}</p>
            </div>
            <div className="showScore">
              <div className="showScoreLeft">
                <p className="scoreTitle">{beer.ratingScore}</p>
                <div class="rating-box">
                          <span class="rating-star2 full-star"></span>
                          <span class="rating-star2 full-star"></span>
                          <span class="rating-star2 full-star"></span>
                          <span class="rating-star2 full-star"></span>
                          <span class="rating-star2 empty-star"></span>
                      </div>
                <p className="scoreSubTitle">{beer.ratingAmount} Ratings</p>
              </div>
            </div>
          </div>
        </div>
        <BeerProfile />
    </div>
    
  )
}

export default BeerDetails