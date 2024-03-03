export default function Circle(props) {
    const circleStyle = {
        padding:10,
        margin:20,
        display:"inline-block",
        backgroundColor: props.bgColor,
        borderRadius: "50%",
        width:100,
        height:100,
    }
    return (
        <div style={circleStyle}>
        </div>
    );
}
