import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UseRef from "./UseRef.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <UseRef />
    </div>
  )
}

export default App
