import { useState } from 'react'
<<<<<<< HEAD
=======
import Circle from './components/Circle'
>>>>>>> 42f29dbe29e3c929c2dd19378268166510e61c4d
import './App.css'
import Circle from './components/Circle'
import AtomDrawing from './components/AtomDrawing'
import UserInput from './components/UserInput'

function App() {
  const [count, setCount] = useState(0)
<<<<<<< HEAD

  return (
    <>
      <UserInput />
      <AtomDrawing />
      <Circle bgColor = "#000000"/>
=======
  
  return (
    <>
      <AtomDrawing />
      <UserInput />
>>>>>>> 42f29dbe29e3c929c2dd19378268166510e61c4d
    </>
  )
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 42f29dbe29e3c929c2dd19378268166510e61c4d
