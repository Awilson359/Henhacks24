<<<<<<< HEAD
import Circle from "./Circle";
// props.element.protons

function AtomDrawing(props){
    const nucleus: Circle = <Circle bgColor={"#F4E310"}/>
    
    return (
        <>
        <style>
            
        </style>
        
        <html>
            <head>
                
            </head>
            
            <body>
                <div id = "container">

                </div>
            </body>
        </html>
        </>
=======
function AtomDrawing(props){
    return (
        <h1>{props.element}</h1>
>>>>>>> 28fb5eec7bc100b090db15865a3a5f10f6ad3a81
    )
}

export default AtomDrawing;