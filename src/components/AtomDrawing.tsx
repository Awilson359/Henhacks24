import Circle from "./Circle";
import Ring from "./Ring";
import Elements from "../Elements";
import { useState } from "react";
// props.element.protons

function AtomDrawing(props){
    const nucleus: Circle = <Circle bgColor={"#F4E310"}/>
    const shells = [];
    const [diam, setDiam] = useState(200);
    
    for (let i = 0; i < props.Elements.shells; i++) {
        shells.push(<Ring diameter = {diam}/>)
        setDiam(diam+100);
    }
    const shelements = shells.map( shell => {
        return shell;
    })

    return (
        <>
        <html>
            <head>
                
            </head>
            
            <body>
                <div id = "container">
                    {shelements}
                    {nucleus}
                </div>
                <div id = "containter">

                </div>
                {Elements[0].name}
            </body>
        </html>
        </>
    )
}

export default AtomDrawing;