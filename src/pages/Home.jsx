import React, {useState, useEffect, useRef} from "react";
import Header from '../components/header/Header'
import SearchBar from '../components/searchBar/SearchBar';
import Beers from '../components/beers/Beers.jsx';
import Footer from '../components/footer/Footer.jsx';


const Home = () => {

    const [beers, setBeers] = useState([])
    const [searchInput, setSearchInput] = useState("")

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch('http://localhost:5000/beers')
            .then((res) => res.json())
             .then (data => setBeers(data)) ;
            //.then(data => console.log(data))
    }

    console.log({beers})

    function changeHandler(e) {
        setSearchInput(e.target.value)
        console.log("changeHandler blev kaldt")
    }

    const filteredBeers = beers.filter((beer) => {
        return beer.type.toLowerCase().includes(searchInput.toLowerCase())
            || beer.name.toLowerCase().includes(searchInput.toLowerCase())
            || beer.brewery.toLowerCase().includes(searchInput.toLowerCase())
    })

    return (
        <div>
            <Header/>
            <SearchBar changeHandler={changeHandler}/>
            <Beers filteredBeers={filteredBeers}/>
            <Footer/>
        </div>
    )
}

export default Home