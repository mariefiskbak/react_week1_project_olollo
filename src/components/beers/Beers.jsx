import React from 'react'
import './beers.css'
import image1 from '../../images/1.png'
import image2 from '../../images/2.png'
import image3 from '../../images/3.png'

const Beers = () => {
  return (
    <div className="beerField">
        <h2>title</h2>
        <div className="beerRow">
            <div className="beerItem">
                <img src={image1} alt="" />
                <h2>Beer name</h2>
                <div className="desc">
                <h4>Type</h4>
                <h4>Country </h4><img src="" alt="" />
                </div>
                <div className="rating">
                    <div className="ratingTitle">
                    <h3>Rating</h3>
                    <h2>3.8</h2>
                    </div>
                    <div class="rating-box">
                        <span class="rating-star full-star"></span>
                        <span class="rating-star full-star"></span>
                        <span class="rating-star full-star"></span>
                        <span class="rating-star half-star"></span>
                        <span class="rating-star empty-star"></span>
                    </div>
                </div>
            </div>
            <div className="beerItem">
                <img src={image2} alt="" />
                <h2>Beer name</h2>
                <div className="desc">
                <h4>Type</h4>
                <h4>Country </h4><img src="" alt="" />
                </div>
                <div className="rating">
                    <div className="ratingTitle">
                    <h3>Rating</h3>
                    <h2>3.8</h2>
                    </div>
                    <div class="rating-box">
                        <span class="rating-star full-star"></span>
                        <span class="rating-star full-star"></span>
                        <span class="rating-star full-star"></span>
                        <span class="rating-star half-star"></span>
                        <span class="rating-star empty-star"></span>
                    </div>
                </div>
            </div>
            <div className="beerItem">
                <img src={image3} alt="" />
                <h2>Beer name</h2>
                <div className="desc">
                <h4>Type</h4>
                <h4>Country </h4><img src="" alt="" />
                </div>
                <div className="rating">
                    <div className="ratingTitle">
                    <h3>Rating</h3>
                    <h2>3.8</h2>
                    </div>
                    <div class="rating-box">
                        <span class="rating-star full-star"></span>
                        <span class="rating-star full-star"></span>
                        <span class="rating-star full-star"></span>
                        <span class="rating-star half-star"></span>
                        <span class="rating-star empty-star"></span>
                    </div>
                </div>
            </div>
    
        </div>
    </div>
  )
}

export default Beers