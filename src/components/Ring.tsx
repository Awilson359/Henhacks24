import { useState } from "react";
export default function Ring(props) {
    const ringStyle = {
        padding:10,
        margin:20,
        display:"inline-block",
        border: "solid 2px",
        borderRadius: "50%",
        width: props.diameter,
        height: props.diameter,
    }
    
  
    return (
        <div style={ringStyle}>
            
        </div>
    );
}
