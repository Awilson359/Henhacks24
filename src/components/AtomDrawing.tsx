import Circle from "./Circle";
import Ring from "./Ring";
import Elements from "../Elements";
import { Element } from "../Element";
import { useState } from "react";
// props.element.protons

function AtomDrawing(props){
    const nucleus: Circle = <Circle diameter={100}bgColor={"#F4E310"}/>
    const noElement = new Element("No element found",0,0,0,0, "");
    const [shells, setShells] = useState([0]);
    const [diam, setDiam] = useState(200);
    const [element, setElement] = useState(noElement);

    function findElement(){
        for (let i = 0; i < Elements.length; i++){
            if(Elements[i].protons === props.protons && Elements[i].neutrons === props.neutrons && Elements[i].electrons === props.electrons){
                setElement(Elements[i]);
                break;
            }
            setElement(noElement);
        }
        drawShells();
    }

    function drawShells(){
        for (let i = 1; i < element.shells+1; i++) {
            console.log(shells)
            setShells([...shells, diam])
            setDiam(diam+200);
        }
    }

    const shelements = shells.map(diam => {
        return <Ring diameter = {diam}/>;
    })



    return (
        <>
            <button type="submit" onClick={findElement}>Draw Atom</button>
            <div id = "container">

                {shelements}
                {nucleus}
                <img src={element.image}  alt={element.name} height={475}/>
            </div>
            <div id = "container"></div>
            {element.name}
            {element.image}
        </>
    )
}

export default AtomDrawing;