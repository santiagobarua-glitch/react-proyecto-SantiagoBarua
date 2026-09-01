import { useTema } from "./ContextTema"
import { type ReactNode } from "react"

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