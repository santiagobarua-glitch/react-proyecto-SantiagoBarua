import { useContadorStore } from "./Zustant"





function Contador() {
    const contador = useContadorStore((state) => state.contador)
    const incrementar = useContadorStore((state) => state.incrementar)
    const decrementar = useContadorStore((state) => state.decrementar)
    const reiniciar = useContadorStore((state) => state.reiniciar)

    return (
        <div>
            <div>
                <button
                    type="button"
                    className="counter"
                    onClick={incrementar}
                >
                    Suma
                </button>
                <span>{contador}</span>
                <button
                    type="button"
                    className="counter"
                    onClick={decrementar}
                >
                    Resta
                </button>
            </div>
            <div>
                <button
                    type="button"
                    className="counter"
                    onClick={reiniciar}
                >
                    Reiniciar
                </button>
            </div>
        </div>
    )
}

export default Contador