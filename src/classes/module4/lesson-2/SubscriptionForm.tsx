import { useState, type FormEvent } from "react"

function SubcriptionForm() {
    const [enviado, setEnviado] = useState(false)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setEnviado(true)
    }

    return enviado ? <p>Suscripcion exitosa</p> : (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" required />
            <button type="submit">Enviar</button>
        </form>
    )
}

export default SubcriptionForm