import { useContador } from "./ContadorZustand"


function Contador() {
    const { contador, incrementar, decrementar, reiniciar } = useContador(0)

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