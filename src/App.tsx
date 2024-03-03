import { useState } from 'react'
import './App.css'
import Circle from './components/Circle'
import AtomDrawing from './components/AtomDrawing'
import UserInput from './components/UserInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserInput />
      <AtomDrawing />
    </>
  )
}

export default App;
