import { useState } from 'react'
import './App.css'
import AtomDrawing from './components/AtomDrawing'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <AtomDrawing element = {}/>
    </>
  )
}

export default App
