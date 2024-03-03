export default function Ring(props) {
    const circleStyle = {
        padding:10,
        margin:20,
        display:"inline-block",
        border: "solid 2px",
        borderRadius: "50%",
        width: props.diameter,
        height: props.diameter,
    }

    return (
        <div style={circleStyle}>
        </div>
    );
}
