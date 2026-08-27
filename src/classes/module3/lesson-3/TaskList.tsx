import { useState } from "react"

function TaskList() {
    const Tareas = [{"name":"tarea!", "id":1}]
    const [task, setTask] = useState(Tareas)
    const [newTask, setNewTask] = useState("")

    const handleAddTask = () => {
        if (newTask.trim() === "") return 
        
        const newEntry = {
            id: Date.now(),
            name: newTask
        }

        setTask([...task, newEntry]) 
        setNewTask("")
    }

    const handleDeleteTask= (idToDelete: number) => {
        const filteredNames = task.filter(item => item.id !== idToDelete)
        setTask(filteredNames)
    }

    const message = task.length == 0 ? "no hay tareas" : ""

    return (
        <div>
            <input 
                type="text" 
                placeholder="Escribe una tarea" 
                value={newTask} 
                onChange={(task) => setNewTask(task.target.value)} 
            />
            <button onClick={handleAddTask}>Agregar</button>

            <ul>
                {task.map((item) => (
                    <li key={item.id}>
                        <p>{item.name}</p>
                        <button onClick={() => handleDeleteTask(item.id)}>Eliminar</button>
                    </li> 
                ))}
            </ul>
            <p>{message}</p>
        </div>
    )
}

export default TaskList
