import { useState } from "react";

function UserInput(){
    const [electrons, setElectrons] = useState(0);
    const [protons, setProtons] = useState(0);
    const [neutrons, setNeutrons] = useState(0);

    return (
<>
    <label>
        Amount of Protons:
        <input name = "protonNum" value={protons} onChange={e => setProtons(Number(e.target.value))}/>
        Amount of Neutrons:
        <input name = "neutronNum" value={neutrons} onChange={e => setNeutrons(Number(e.target.value))}/>
        Amount of Electrons:
        <input name = "electronNum" value={electrons} onChange={e => setElectrons(Number(e.target.value))}/>

    </label>
</>
    )
}

export default UserInput;
