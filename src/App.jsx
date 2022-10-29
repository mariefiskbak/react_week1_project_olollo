import Home from './pages/Home'
import BeerDetails from './pages/beerDetails/BeerDetails'
import MyBrewery from './pages/admin/pages/myBrewery/MyBrewery'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import ScrollToTop from './functions/ScrollToTop';
import Dashboard from './pages/admin/pages/dashboard/Dashboard';
import Manager from './pages/admin/pages/manager/Manager';
import Statistics from './pages/admin/pages/statistics/Statistics';
import Settings from './pages/admin/pages/adminSettings/Settings';
import Support from './pages/admin/pages/support/Support';

function App() {

    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/beer/:id" element={<BeerDetails/>}></Route>
                <Route path="/admin" element={<Dashboard/>}></Route>
                <Route path="/admin/mybrewery" element={<MyBrewery/>}></Route>
                <Route path="/admin/manager" element={<Manager/>}></Route>
                <Route path="/admin/statistics" element={<Statistics/>}></Route>
                <Route path="/admin/settings" element={<Settings/>}></Route>
                <Route path="/admin/support" element={<Support/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
