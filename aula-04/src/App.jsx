import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './assets/pages/Home'
import Galeria from './assets/pages/Galeria'
import Contatos from './assets/pages/Contatos'
import ContatoDetalhes from './assets/pages/ContatoDetalhes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/galeria" element={<Galeria />}/>
      <Route path="/contatos" element={<Contatos/>}/>
      <Route path="/contatos/:id" element={<ContatoDetalhes/>}/>

      <Route path="*" element={<h1>Erro 404 - Página não encontrada</h1>}/>

    </Routes>
  )
}

export default App
