import { useState } from "react";
import Flashcard from "./Flashcard";

function CountFlashcard() {
    const [count, setCount] = useState<number>(3);
    const message = count == 0 ? "No hay más tareas" : " "

    const handleComplete = (isComplete) => {
        setCount((complete) => (isComplete ? complete - 1 : complete + 1));
    };

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h2>Tareas pendientes: {count}</h2>

            <div style={{ display: "flex", gap: "10px" }}>
                <Flashcard complete={handleComplete} />
                <Flashcard complete={handleComplete} />
                <Flashcard complete={handleComplete} />
                <p>{message}</p>
            </div>
        </div>
    );
}

export default CountFlashcard;
