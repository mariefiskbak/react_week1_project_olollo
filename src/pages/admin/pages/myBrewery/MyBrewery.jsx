import React, {useState }from 'react'
import './myBrewery.css'
import * as Md from "react-icons/md";
import Image from '../../../../images/1.png'
import Navbar from '../../components/navbar/Navbar';
import ScrollToTop from '../../../../functions/ScrollToTop';
import { useHref } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MyBrewery = () => {


  const [order, setOrder] = useState(0)

  function topFunction(value) {
    setOrder(value);

    var x = document.getElementById("unfold");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }




      
  
  


    
  return (
    <>
    <div className="Page">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
            <div className="top">
                <p>My Brewery</p>
                
            </div>

              


                <div className="midParent">
                  <div className="mid a" id={order == 1 ? "order1" : ""}>
                    <button onClick={() => topFunction(1)}>Open & Grow</button>
                    <button onClick={() => setOrder(0)} className='fullb' >Reset</button>
                    <div id="unfold">
                      <p>Hello dude</p>
                    </div>
                  </div>
                  
                  <div className="mid b" id={order == 2 ? "order1" : ""}>
                    <button onClick={() => topFunction(2)}>Open & Grow</button>
                    <button onClick={() => setOrder(0)} className='fullb' >Reset</button>
                  </div>
                  <div className="mid c" id={order == 3 ? "order1" : ""}>
                    <button onClick={() => topFunction(3)}>Open & Grow</button>
                    <button onClick={() => setOrder(0)} className='fullb' >Reset</button>
                  </div>
                  <div className="mid d" id={order == 4 ? "order1" : ""}>
                    <button onClick={() => topFunction(3)}>Order & Grow</button>
                    <button onClick={() => setOrder(0)} className='fullb' >Reset</button>
                  </div>
                  <div className="mid e" id={order == 5 ? "order1" : ""}>
                    <button onClick={() => topFunction(5)}>Order & Grow</button>
                    <button onClick={() => setOrder(0)} className='fullb' >Reset</button>
                  </div>
                  <div className="mid f" id={order == 6 ? "order1" : ""}>
                    <button onClick={() => topFunction(6)}>Order & Grow</button>
                    <button onClick={() => setOrder(0)} className='fullb' >Reset</button>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default MyBrewery