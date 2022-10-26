import './searchBar.css'
import React from 'react'

const SearchBar = () => {
  return (
    <div className="field"><div className="field2"></div>
        <div className="title">
            <h2>Søg efter øl med stregkode</h2>
        </div>
        <div className="searchBar">
            <input placeHolder="Søg øl, bryggeri, eller type"type="text" />
            <button>Search</button>
        </div>
    </div>
  )
}

export default SearchBar