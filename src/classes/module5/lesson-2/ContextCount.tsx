import { createContext, useContext, useState, type ReactNode } from 'react'

interface ContadorContextType {
    contador: number
    incrementar: () => void
    decrementar: () => void
    reiniciar: () => void
}

export const ContadorContext = createContext<ContadorContextType | undefined>(undefined)

export function ContadorProvider({ children }: { children: ReactNode }) {
    const [contador, setContador] = useState(0)
    const incrementar = () => setContador((c) => c + 1)
    const decrementar = () => setContador((c) => c = c - 1 < 0 ? 0 : c - 1) 
    const reiniciar = () => setContador((c) => c = 0)

    return (
        <ContadorContext.Provider value={{ contador, incrementar, decrementar, reiniciar }}>
            {children}
        </ContadorContext.Provider>
    )
}

export function useContador() {
    const contexto = useContext(ContadorContext)
    if (!contexto) {
        throw new Error('useContador debe usarse dentro de un ContadorContext.Provider')
    }
    return contexto
}