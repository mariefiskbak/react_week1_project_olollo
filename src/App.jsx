import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header.jsx'
import UseRef from "./UseRef.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header />
    <UseRef />
    </div>
  )
}

export default App
