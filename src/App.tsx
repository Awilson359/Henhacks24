import { useState } from 'react'
import './App.css'
import AtomDrawing from './components/AtomDrawing'
import UserInput from './components/UserInput'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <AtomDrawing />
      <UserInput />
    </>
  )
}

export default App;
