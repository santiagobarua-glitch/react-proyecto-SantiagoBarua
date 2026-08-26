import { useState } from "react";

function StockWarn() {
    const [count, setCount] = useState(0);
    const message = count >= 1 ? 'disponible' : 'no hay unidades'

    return (
        <div>
            <div style={{ margin: "15px", padding: "10px 20px", cursor: "pointer", backgroundColor: "grey" }}>
                <p>{message}</p>
                <p>{count}</p>
            </div>
            <button
                type="button"
                className="counter"
                onClick={() => {
                    setCount((count) => count + 1)}}
            >
                Suma
            </button>
            <button
                type="button"
                className="counter"
                onClick={() => {
                    setCount((count) => count - 1)}}
            >
                Resta
            </button>
        </div>
    );
}

export default StockWarn;