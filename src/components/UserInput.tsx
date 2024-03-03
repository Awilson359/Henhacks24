import { useState } from "react";

function UserInput(props){
    const [electrons, setElectrons] = useState(0);
    const [protons, setProtons] = useState(0);
    const [neutrons, setNeutrons] = useState(0);

    const handleElectrons = (electrons) => {
        setElectrons(electrons);
        props.getElectrons(electrons);
    }

    const handleNeutrons = (neutrons) => {
        setNeutrons(neutrons);
        props.getNeutrons(neutrons);
    }

    const handleProtons = (protons) => {
        setProtons(protons);
        props.getProtons(protons);
    }

    return (
<>
    <label>
        Amount of Protons:
        <input name = "protonNum" value={protons} onChange={e =>handleProtons(Number(e.target.value))}/>
        Amount of Neutrons:
        <input name = "neutronNum" value={neutrons} onChange={e => handleNeutrons(Number(e.target.value))}/>
        Amount of Electrons:
        <input name = "electronNum" value={electrons} onChange={e => handleElectrons(Number(e.target.value))}/>

    </label>
</>
    )
}

export default UserInput;
