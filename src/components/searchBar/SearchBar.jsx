import './searchBar.css'
import React from 'react'


const SearchBar = ({changeHandler}) => {
    return (
        <div className="field">
            <div className="field2"></div>
            <div className="title">
                <h2>Beer searchengine</h2>
            </div>
            <div className="searchBar">
                <input placeholder="Søg øl, bryggeri, eller type"
                       type="text"
                       onChange={changeHandler}/>
                <button>Search</button>
            </div>
        </div>
    )
}

export default SearchBar