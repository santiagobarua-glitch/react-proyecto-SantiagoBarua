import { TarjetaInfo } from "./Customhooks/lesson-1/TarjetaInfo"
import Contador from "./Customhooks/lesson-2/Contador"
import { TemaProvider } from "./Customhooks/lesson-3/Fondo"
import TemaFondo from "./Customhooks/lesson-3/TemaFondo"


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