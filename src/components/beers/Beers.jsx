import React from 'react'
import './beers.css'
import image1 from '../../images/1.png'
import image2 from '../../images/2.png'
import image3 from '../../images/3.png'
import dk from '../../images/dk.png'
import './beer.js'

const Beers = () => {

  return (
    <div className="beerField">
        <h2>title</h2>
        <div className="beerRow">
        <div className="beerItem">
                <img src={image1} alt="" />
                <div className="backImage"></div>
                <div className="ratingBox">
                <div className="rating">
                    <div className="ratingTitle">
                    <h2>3.8</h2>
                    </div>
                    <div class="rating-box">
                        <span class="rating-star full-star"></span>
                        <span class="rating-star full-star"></span>
                        <span class="rating-star full-star"></span>
                        <span class="rating-star half-star"></span>
                        <span class="rating-star empty-star"></span>
                    </div>
                    <h6>743 Ratings</h6>
                </div>
                </div>
                <div className="desc">
                    <div className="descTitle">
                        <h2>Delivery Boy And What So Ever</h2>
                    </div>
                    <div className="descSubTitle">
                        <h3>Brewery</h3><button>Mikkeller</button>
                    </div>
                    <div className="countryType">
                        <div className="type">
                            <h4>Type</h4><button>IPA</button>
                        </div>
                        <div className="country">
                            <h4>Country </h4><img src={dk} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="beerItem">
                <img src={image2} alt="" />
                <div className="backImage"></div>
                <div className="ratingBox">
                <div className="rating">
                    <div className="ratingTitle">
                    <h2>4.5</h2>
                    </div>
                    <div class="rating-box">
                        <span class="rating-star full-star"></span>
                        <span class="rating-star full-star"></span>
                        <span class="rating-star full-star"></span>
                        <span class="rating-star full-star"></span>
                        <span class="rating-star half-star"></span>
                    </div>
                    <h6>245 Ratings</h6>
                </div>
                </div>
                <div className="desc">
                    <div className="descTitle">
                        <h2>Future Memories</h2>
                    </div>
                    <div className="descSubTitle">
                        <h3>Brewery</h3><button>Mikkeller</button>
                    </div>
                    <div className="countryType">
                        <div className="type">
                            <h4>Type</h4><button>IPA</button>
                        </div>
                        <div className="country">
                            <h4>Country </h4><img src={dk} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="beerItem">
                <img src={image3} alt="" />
                <div className="backImage"></div>
                <div className="ratingBox">
                <div className="rating">
                    <div className="ratingTitle">
                    <h2>3.1</h2>
                    </div>
                    <div class="rating-box">
                        <span class="rating-star full-star"></span>
                        <span class="rating-star full-star"></span>
                        <span class="rating-star full-star"></span>
                        <span class="rating-star empty-star"></span>
                        <span class="rating-star empty-star"></span>
                    </div>
                    <h6>42 Ratings</h6>
                </div>
                </div>
                <div className="desc">
                    <div className="descTitle">
                        <h2>That's A Paddlin'</h2>
                    </div>
                    <div className="descSubTitle">
                        <h3>Brewery</h3><button>Mikkeller</button>
                    </div>
                    <div className="countryType">
                        <div className="type">
                            <h4>Type</h4><button>Double IPA</button>
                        </div>
                        <div className="country">
                            <h4>Country </h4><img src={dk} alt="" />
                        </div>
                    </div>
                </div>
            </div>
    
    
        </div>
    </div>
  )
}

export default Beers