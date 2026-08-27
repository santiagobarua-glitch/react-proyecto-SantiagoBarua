import { useState } from "react"

function LiveGreet() {
    const [names, setNames] = useState("")

    const message = names == "" ? "desconocido" : names
    return (
        <div>
            <input 
                type="text" 
                placeholder="Escribe un nombre" 
                value={names} 
                onChange={(names) => setNames(names.target.value)} 
            />
            <p>hola {message}</p>
        </div>
    )
}

export default LiveGreet
