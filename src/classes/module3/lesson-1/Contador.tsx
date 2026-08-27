import { useState } from "react";

function Contador() {
    const [cantidad, setCantidad] = useState(0);

    return (
        <div>
            <button
                type="button"
                className="counter"
                onClick={() => setCantidad((cantidad) => cantidad + 1)}
            >
                Suma
            </button>
            <button
                type="button"
                className="counter"
                onClick={() => setCantidad((cantidad) => cantidad - 1)}
            >
                Resta
            </button>
            <span>{cantidad}</span>
        </div>
    )
}

export default Contador