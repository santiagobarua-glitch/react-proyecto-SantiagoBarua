import { useState, type FormEvent } from "react"
import { useAuthStore } from "./FormSlice"

function Form() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  
  const estaLogueado = useAuthStore((state) => state.estaLogueado)
  const nombreGuardado = useAuthStore((state) => state.name)
  const register = useAuthStore((state) => state.register)
  const logout = useAuthStore((state) => state.logout)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (name.trim() === '' || password.trim() === '') {
      return
    }
    register(name, password)
  }

  return (
    <div>
      {estaLogueado ? (
        <div>
          <span>Bienvenido, {nombreGuardado}</span>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Escribe tu nombre" 
          />
          <input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Escribe tu contraseña" 
          />
          <button type="submit">Guardar</button>
        </form>
      )}
    </div>
  )
}

export default Form
