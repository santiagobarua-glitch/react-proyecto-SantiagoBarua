import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Clase1Page } from './pages/Clase1.tsx'
import { Clase2Page } from './pages/Page2.tsx'
import { Clase3Page } from './pages/Page3.tsx'
import { Clase4Page } from './pages/Page4.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <nav style={{display: 'flex', gap:'20px'}}>
        <Link to={'/ejercicio1'}>Ejercicios dia 3</Link>
        <Link to={'/ejercicio2'}>Ejercicios dia 4</Link>
        <Link to={'/ejercicio3'}>Ejercicios dia 5</Link>
        <Link to={'/ejercicio4'}>Ejercicios dia 6</Link>
      </nav>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/ejercicio1' element={< Clase1Page />} />
        <Route path='/ejercicio2' element={< Clase2Page />} />
        <Route path='/ejercicio3' element={< Clase3Page />} />
        <Route path='/ejercicio4' element={< Clase4Page />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
