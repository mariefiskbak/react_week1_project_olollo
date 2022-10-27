import React from 'react'
import Header from '../components/header/Header'
import SearchBar from '../components/serachBar/SearchBar';
import Beers from '../components/beers/Beers.jsx';
import Footer from '../components/footer/Footer.jsx';


const Home = () => {
  return (
    <div>
        <Header/>
        <SearchBar/>
        <Beers/>
        <Footer/>
    </div>
  )
}

export default Home