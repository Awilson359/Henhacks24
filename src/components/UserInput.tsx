import { useState } from "react";

function UserInput(){
    const [electrons, setElectrons] = useState(0);
    const [protons, setProtons] = useState(0);
    const [neutrons, setNeutrons] = useState(0);

    return (
<>
    <label>
        Amount of Protons:
        <input name = "protonNum" defaultValue="0"/>
        Amount of Neutrons:
        <input name = "neutronNum" defaultValue="0"/>
        Amount of Electrons:
        <input name = "electronNum" defaultValue="0"/>
        
    </label>
</>
    )
}

export default UserInput;
