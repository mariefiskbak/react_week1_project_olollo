import React, {useState, useEffect} from 'react'
import './beers.css'
import image1 from '../../images/1.png'
import dk from '../../images/dk.png'

function beer() {

    function getBeers() {

        fetch('http://localhost:5000/beers')
        .then((res) => res.json())
        .then ((data) => {
            setBeers(data)
            console.log(data)
        }) ;

    }

    const [beers, setBeers] = useState([])

    useEffect(() => {
        getBeers()
    }, [])

    
  return (
    <div className="beerField">
    <div className="beerRow">
    {beers.map(beers => {
    return(
    <div className="beerItem">
                <img src={beers.image} alt="" />
                <div className="backImage"></div>
                <div className="ratingBox">
                <div className="rating">
                    <div className="ratingTitle">
                    <h2>{beers.ratingScore}</h2>
                    </div>
                    <div class="rating-box">
                        <span class="rating-star full-star"></span>
                        <span class="rating-star full-star"></span>
                        <span class="rating-star full-star"></span>
                        <span class="rating-star half-star"></span>
                        <span class="rating-star empty-star"></span>
                    </div>
                    <h6>{beers.ratingAmount} Ratings</h6>
                </div>
                </div>
                <div className="desc">
                    <div className="descTitle">
                        <h2>{beers.name}</h2>
                    </div>
                    <div className="descSubTitle">
                        <h3>Brewery</h3><button>{beers.brewery}</button>
                    </div>
                    <div className="countryType">
                        <div className="type">
                            <h4>Type</h4><button>{beers.type}</button>
                        </div>
                        <div className="country">
                            <h4>Country </h4><img src={beers.country} alt="" />
                        </div>
                    </div>
                </div>
            </div>
    )
    })}
        </div>
    </div>
  )
}

export default beer