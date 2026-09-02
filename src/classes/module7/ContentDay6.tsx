import { TarjetaInfo } from "./lesson-1/TarjetaInfo"
import Contador from "./lesson-2/Contador"
import TemaFondo from "./lesson-3/TemaFondo"
import { TemaProvider } from "./lesson-3/Fondo"

function ContentDay6() {
    return (
        <div>
            <TemaProvider>
                <TemaFondo>
                    <TarjetaInfo texto="Tarea1" prioridad="alta" />
                    <TarjetaInfo texto="Tarea2" prioridad="media" />
                    <TarjetaInfo texto="Tarea3" prioridad="baja" />
                    <Contador />
                </TemaFondo>
            </TemaProvider>
        </div>
    )
}

export { ContentDay6 }