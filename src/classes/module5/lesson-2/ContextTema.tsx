import { createContext, useContext, useState, type ReactNode } from 'react'

interface ContadorContextType {
    tema: string
    cambiarTema: () => void
}

export const TemaContext = createContext<ContadorContextType | undefined>(undefined)

export function TemaProvider({ children }: { children: ReactNode }) {
    const [tema, setTema] = useState('claro')

    const cambiarTema = () => setTema((tema) => tema = tema == 'claro' ? 'oscuro' : 'claro')

    return (
        <TemaContext.Provider value={{ tema, cambiarTema }}>
            {children}
        </TemaContext.Provider>
    )
}

export function useTema() {
    const contexto = useContext(TemaContext)
    if (!contexto) {
        throw new Error('useTema debe usarse dentro de un ThemeContext.Provider')
    }
    return contexto
}