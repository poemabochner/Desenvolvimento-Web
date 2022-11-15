import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [nome, setNome] = useState("Poema")

  console.log("Nome: ", nome);

  return (
    <>
   <h1>Use Effect</h1>
   <button onClick={() => setNome("OutroNome")}>Clique Aqui</button>
   </>
  )
}

export default App
