import { useState } from "react";

function Flashcard({ complete }) {
  const [isComplete, setComplete] = useState(false);

  const toggleComplete = () => {
    const nextState = !isComplete;
    setComplete(nextState);
    
    if (complete) {
      complete(nextState);
    }
  };

  return (
    <div 
      onClick={toggleComplete} 
      style={{
        marginLeft: "auto",
        marginRight: "auto", 
        width: "100px",
        height: "150px",
        background: "grey",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        borderRadius: "8px",
        userSelect: "none"
      }}
    >
      {isComplete ? "terminado" : "no terminado"}
    </div>
  );
}

export default Flashcard;
