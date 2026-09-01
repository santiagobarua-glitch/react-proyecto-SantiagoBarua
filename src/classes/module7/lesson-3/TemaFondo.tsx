import { type ReactNode } from "react"
import { useTema } from "./Fondo"

function TemaFondo({ children }: { children: ReactNode }) {

    const { tema, cambiarTema } = useTema()

    return (
        <div className={tema}>
            <button
                type="button"
                className="counter"
                onClick={cambiarTema}
            >
                Cambiar Tema
            </button>
            {children}
        </div>
    )
}

export default TemaFondo