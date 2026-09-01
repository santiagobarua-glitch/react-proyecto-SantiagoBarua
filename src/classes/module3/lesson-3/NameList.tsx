import { useState } from "react"

function NameList() {
    const NAMES = [{"id":1, "name":"Alice"},{"id":2, "name":"Bob"}, {"id":3, "name":"Robert"}]
    const [names, setNames] = useState(NAMES)
    const [newName, setNewName] = useState("")

    const handleAddName = () => {
        if (newName.trim() === "") return 
        
        const newEntry = {
            id: Date.now(),
            name: newName
        }

        setNames([...names, newEntry]) 
        setNewName("")
    }

    const handleDeleteName = (idToDelete: number) => {
        const filteredNames = names.filter(item => item.id !== idToDelete)
        setNames(filteredNames)
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Escribe un nombre" 
                value={newName} 
                onChange={(name) => setNewName(name.target.value)} 
            />
            <button onClick={handleAddName}>Agregar</button>

            <ul>
                {names.map((item) => (
                    <li key={item.id}>
                        <p>{item.name}</p>
                        <button onClick={() => handleDeleteName(item.id)}>Eliminar</button>
                    </li> 
                ))}
            </ul>
        </div>
    )
}

export default NameList
