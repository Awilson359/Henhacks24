import Circle from "./Circle";
import Ring from "./Ring";
// props.element.protons

function AtomDrawing(props){
    const nucleus: Circle = <Circle bgColor={"#F4E310"}/>
    const shell1: Ring = <Ring diameter = {200}/>
    const shell2: Ring = <Ring diameter = {300}/>
    
    return (
        <>
        <html>
            <head>
                
            </head>
            
            <body>
                <div id = "container">
                    {shell1}
                    {shell2}
                    {nucleus}
                </div>
            </body>
        </html>
        </>
    )
}

export default AtomDrawing;