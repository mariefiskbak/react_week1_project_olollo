import React, {useState, useEffect }from 'react'
import './myBrewery.css'
import * as Md from "react-icons/md";
import * as Ai from "react-icons/ai";
import Image from '../../../../images/1.png'
import Navbar from '../../components/navbar/Navbar';
import Beers from '../../../../components/beers/Beers';



const MyBrewery = () => {


  const [order, setOrder] = useState(0)

  const [beers, setBeers] = useState([])
  
  const fetchData = () => {
    fetch('http://localhost:5000/beers')
      .then((res) => res.json())
      .then(data => setBeers(data) )
  }

  useEffect(() => {
    fetchData()
  }, [])
  
 


  function topFunction(value) {
    setOrder(value);
    document.getElementById('top').scrollIntoView({behavior: "smooth"})

  }

  

  

  
  
  
  
  return (
    <>
    <div className="Page">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
            <div className="top" id='top'>
                <p>My Brewery</p>
            </div>
                <div className="beerParent">
                  {beers.map(beer => {

                    return (

                 
                  <div className="beerChild" id={order == beer.id ? "order1" : ""}>
                    <div className="hide beforeEdit" id={order == beer.id ? "hide" : ""}>
                      <button className="openBtn" onClick={() => topFunction(beer.id)}>Open & Grow</button>
                      <img src={beer.image} alt="" />
                      
                    </div>
                    <Ai.AiFillCloseSquare className="unfold closeBtn" id={order == beer.id ? "unfold" : ""} onClick={() => topFunction(0)}></Ai.AiFillCloseSquare>
                    <div className="unfold" id={order == beer.id ? "unfold" : ""}>
                      <p>Beer ID: {beer.id}</p>
                      <div className="leftUnfold">
                        <img src={beer.image} alt="" />
                      <div className="rightUnfold">

                          <input className="inputName" placeholder={beer.name}></input>
                          <input placeholder={beer.type}></input>
                          <input placeholder='Årgang'></input>
                          <input placeholder='Beer Name'></input>
                  
                    

                         
                         
                          
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  )
                  })}
                 
                  
                  
              </div>
          </div>
      </div>
    </>
  )

}

export default MyBrewery