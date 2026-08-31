import { create } from 'zustand'
import { persist } from 'zustand/middleware';

const CLAVE_STORAGE = 'm6-c3-e4-auth';

interface AuthState {
    name: string;
    password: string;
    estaLogueado: boolean
    register: (name: string, password: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            name: '',
            password: '',
            estaLogueado: false,
            register: (name: string, password: string) => set({ name, password, estaLogueado: true }),
            logout: () => {
                set({ name: '', password: '', estaLogueado: false })
                localStorage.removeItem(CLAVE_STORAGE)
            },
        }),
        {name: CLAVE_STORAGE},
    )
)
