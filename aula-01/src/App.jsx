import './App.css'
import Titulo from './components/Titulo'
import Paragrafo from './components/Paragrafo'

function App() {
  return (
  <>
    <Titulo frase="eu sou o primeiro título" />
    <Titulo frase="eu sou o segundo título" />
    <Paragrafo/>
    </>
  )
}

export default App


//CRIAR UM COMPONENTE DE PARÁGRAFO
//USA O COMPONENTE EMBAIXO DO <Titulo />