import { create } from 'zustand'

interface FormState {
    name: string;        
    inputValue: string; 
    inputName: (value: string) => void;
    form: () => void;
}

export const useFormStore = create<FormState>((set) => ({
    name: '',
    inputValue: '',
    inputName: (value) => set({ inputValue: value }),
    form: () => set((state) => ({ name: state.inputValue.trim() === '' ? 'desconocido' : state.inputValue })),
}))
