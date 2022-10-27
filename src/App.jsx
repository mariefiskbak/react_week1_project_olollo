import Home from './pages/Home'
import BeerDetails from './pages/beerDetails/BeerDetails'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/beer/:id" element={<BeerDetails/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
