import {useState} from 'react'
import Header from './components/header/Header.jsx'
import UseRef from "./UseRef.jsx";
import SearchBar from './components/serachBar/SearchBar';
import Beers from './components/beers/Beers.jsx';
import Beer from "./Beer";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Header/>
            <SearchBar/>
            <Beer/>
            <Beers/>
        </div>
    )
}

export default App
