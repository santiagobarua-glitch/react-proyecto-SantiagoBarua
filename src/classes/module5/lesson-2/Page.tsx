import { ContadorProvider } from "./ContextCount"
import Contador from "./Contador"
import { TemaProvider } from "./ContextTema"
import Fondo from "./TemaFondo"

function Page() {

    return (
        <div>
            <TemaProvider>
                <Fondo>
                    <ContadorProvider>
                        <Contador />
                    </ContadorProvider>
                </Fondo>
            </TemaProvider>
        </div>
    )
}

export default Page