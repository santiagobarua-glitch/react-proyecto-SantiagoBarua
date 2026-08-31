import { create } from 'zustand'

interface ContadorState {
  contador: number
  incrementar: () => void
  decrementar: () => void
  reiniciar: () => void
}

export const useContadorStore = create<ContadorState>((set) => ({
  contador: 0,
  incrementar: () => set((state) => ({ contador: state.contador + 1 })),
  decrementar: () => set((state) => ({ contador: state.contador <= 0 ?  state.contador : state.contador - 1 })),  
  reiniciar: () => set((state) => ({contador: state.contador = 0}))
}))
