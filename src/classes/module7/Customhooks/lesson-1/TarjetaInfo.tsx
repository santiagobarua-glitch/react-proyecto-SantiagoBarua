import { useState } from "react"

type Prioridad = "alta" | "media" | "baja"

type TarjetaInfoProps = {
    texto: string
    prioridad: Prioridad
}

function useToggle(initialValue = false) {
    const [isOpen, setIsOpen] = useState(initialValue)

    const toggle = () => {
        setIsOpen((prevState) => !prevState)
    }

    return { isOpen, toggle }
}

const prioridadStyles: Record<
    Prioridad,
    { color: string }
> = {
    alta: {
        color: "#991b1b",
    },
    media: {
        color: "#92400e",
    },
    baja: {
        color: "#166534",
    },
}

function TarjetaInfo({ texto, prioridad }: TarjetaInfoProps) {
    const { isOpen, toggle } = useToggle(false)
    const estiloPrioridad = prioridadStyles[prioridad]

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                    padding: "16px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                }}
            >
                <span>
                    {texto}
                </span>

                <span style={{ color: estiloPrioridad.color }}>
                    {prioridad}
                </span>
            </div>

            <button type="button" onClick={toggle}>
                {isOpen ? "Ocultar detalle" : "Mostrar detalle"}
            </button>

            {isOpen && (
                <div>
                    Info
                </div>
            )}
        </div>
    )
}

export { TarjetaInfo }
