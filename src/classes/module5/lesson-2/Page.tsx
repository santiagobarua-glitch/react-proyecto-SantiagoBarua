import { ContadorProvider } from "./ContextCount"
import Contador from "./Contador"
import { TemaProvider } from "./ContextTema"
import TemaFondo from "./TemaFondo"

function Page() {

    return (
        <div>
            <TemaProvider>
                <TemaFondo>
                    <ContadorProvider>
                        <Contador />
                    </ContadorProvider>
                </TemaFondo>
            </TemaProvider>
        </div>
    )
}

export default Page