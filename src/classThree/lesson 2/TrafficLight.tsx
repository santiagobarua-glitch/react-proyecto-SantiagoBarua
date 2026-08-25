import { useState } from "react";

function Semaforo() {
    const [color, setColor] = useState("red");

    const cambiarColor = () => {
        if (color === "red") {
            setColor("yellow");
        } else if (color === "green") {
            setColor("red");
        } else if (color === "yellow") {
            setColor("green");
        }
    };

    return (
        <div>
            <button type="button" onClick={cambiarColor} style={{ marginTop: "15px", padding: "10px 20px", cursor: "pointer", backgroundColor:color }}>
                <p>{color}</p>
            </button>
        </div>
    );
}

export default Semaforo;
