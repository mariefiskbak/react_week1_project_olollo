import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './beers.css'
import image1 from '../../images/1.png'
import organic from '../../images/organic.png'

function beer({filteredBeers}) {

    // function getBeers() {
    //
    //     fetch('http://localhost:5000/beers')
    //     .then((res) => res.json())
    //     .then ((data) => {
    //         setBeers(data)
    //
    //
    //     }) ;
    //
    // }
    function getOrganic() {

    }


    // const [beers, setBeers] = useState([])
    //
    //
    // useEffect(() => {
    //     // getBeers()
    //
    // }, [])


    return (
        <div className="beerField">
            <div className="beerRow">
                {/*{beers.map(beer => {*/}
                {filteredBeers.map(beer => {

                    return (
                        <Link to={"beer/" + beer.id} state={{data: beer}} className="link">
                            <div className="beerItem">
                                <img src={beer.image} alt=""/>
                                <div className="backImage"></div>
                                <img src={beer.organic} className="organic"></img>
                                <div className="ratingBox">
                                    <div className="rating">
                                        <div className="ratingTitle">
                                            <h2>{beer.ratingScore}</h2>
                                        </div>
                                        <div class="rating-box">
                                            <span class="rating-star full-star"></span>
                                            <span class="rating-star full-star"></span>
                                            <span class="rating-star full-star"></span>
                                            <span class="rating-star half-star"></span>
                                            <span class="rating-star empty-star"></span>
                                        </div>
                                        <h6>{beer.ratingAmount} Ratings</h6>
                                    </div>
                                </div>
                                <div className="desc">
                                    <div className="descTitle">
                                        <h2>{beer.name}</h2>
                                    </div>
                                    <div className="descSubTitle">
                                        <h3>Brewery</h3>
                                        <button>{beer.brewery}</button>
                                    </div>
                                    <div className="countryType">
                                        <div className="type">
                                            <h4>Type</h4>
                                            <button>{beer.type}</button>
                                        </div>
                                        <div className="country">
                                            <h4>Country </h4><img src={beer.country} alt=""/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Link>

                    )
                })}
            </div>
        </div>
    )
}

export default beer