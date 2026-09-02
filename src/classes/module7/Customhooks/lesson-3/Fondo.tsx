import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

function useLocalStorage(clave: string, valorInicial: string) {
    const [valor, setValor] = useState(() => {
        const guardado = localStorage.getItem(clave)
        return guardado ? JSON.parse(guardado) : valorInicial
    })

    useEffect(() => {
        localStorage.setItem(clave, JSON.stringify(valor))
    }, [clave, valor])

    return [valor, setValor] as const
}

interface TemaContextType {
    tema: string
    cambiarTema: () => void
}

export const TemaContext = createContext<TemaContextType | undefined>(undefined)

export function TemaProvider({ children }: { children: ReactNode }) {
    const [tema, setTema] = useLocalStorage("tema", "claro")

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