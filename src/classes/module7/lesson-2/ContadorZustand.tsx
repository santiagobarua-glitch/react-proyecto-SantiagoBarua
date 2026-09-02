import { useEffect } from 'react'
import { create } from 'zustand'

interface ContadorState {
  valorInicial: number
  contador: number
  incrementar: () => void
  decrementar: () => void
  reiniciar: () => void
}

export const useContadorStore = create<ContadorState>((set) => ({
  valorInicial: 20,
  contador: 20,
  incrementar: () =>
    set((state) => ({
      contador: state.contador + 1,
    })),
  decrementar: () =>
    set((state) => ({
      contador: state.contador - 1,
    })),
  reiniciar: () =>
    set((state) => ({
      contador: state.valorInicial,
    })),
}))

export const useContador = (valorInicial: number) => {
  const contador = useContadorStore((state) => state.contador)
  const incrementar = useContadorStore((state) => state.incrementar)
  const decrementar = useContadorStore((state) => state.decrementar)
  const reiniciar = useContadorStore((state) => state.reiniciar)

  useEffect(() => {
    useContadorStore.setState({
      valorInicial,
      contador: valorInicial,
    })
  }, [valorInicial])

  return {
    contador,
    incrementar,
    decrementar,
    reiniciar,
  }
}


