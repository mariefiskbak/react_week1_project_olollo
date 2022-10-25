import { useState } from 'react'
import Header from './components/header/Header.jsx'
import UseRef from "./UseRef.jsx";
import SearchBar from './components/serachBar/SearchBar';
import Beers from './components/beers/Beers.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header />
    <SearchBar />
    <Beers />
    </div>
  )
}

export default App
