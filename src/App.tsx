import { useState } from 'react'
import './App.css'
import Circle from './components/Circle'
import AtomDrawing from './components/AtomDrawing'
import UserInput from './components/UserInput'

function App() {
  const [electrons, setElectrons] = useState(0);
  const [protons, setProtons] = useState(0);
  const [neutrons, setNeutrons] = useState(0);

  const getElectrons = (electrons) => {
    setElectrons(electrons);
  }

  const getNeutrons = (neutrons) => {
    setNeutrons(neutrons);
  }

  const getProtons = (protons) => {
    setProtons(protons);
  }

  return (
    <>
      <UserInput getElectrons={getElectrons} getNeutrons={getNeutrons} getProtons={getProtons}/>
      <AtomDrawing electrons={electrons} neutrons={neutrons} protons={protons}/>
    </>
  )
}

export default App;
