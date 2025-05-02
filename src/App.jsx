import { useState } from 'react'
import './App.css'
import Nav from './components/navbar/navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    </>
  )
}

export default App
