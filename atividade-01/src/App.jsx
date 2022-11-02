import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [cont, setCont] = useState(0);
  const [mult, setMult] = useState(0);
  const [textoDigitado, setTextoDigitado] = useState();
  const [valorTotal, setValorTotal] = useState(0);
  const [metaDia, setMetaDia] = useState();
  const [mensagem, setMensagem] = useState("");
  const [historico, setHistorico] = useState("");
  const date = new Date().toLocaleString();


  function clique() {
    console.log("botao clicado");
    setCont(cont+1)
    multiplicacao();
    setHistorico(historico + date);
    meta();
  }

    const multiplicacao = () => {
      //setvalorTotal((prevState => prevState + textoDigitado))
      setValorTotal(valorTotal + parseFloat(textoDigitado) )
      console.log(mult);
      //Setmult(textoDigitado)
    }

    function resetar(){
      console.log("botao clicado");
    setCont(0)
    //Setmult(0)
    setValorTotal(0)
    setMensagem("");
    setHistorico("");
    }
   
    // const handleText = () => {
    //   console.log("passar o texto digitado")
    // };
    const handleTextoDigitado = (texto) => {
      // const handleTextoDigitado = (texto) => {
        console.log("mLs", texto.target.value)
        setTextoDigitado(texto.target.value)
    }

    const handleMetaDia = (texto) => {
        console.log("metadia", texto.target.value)
        setMetaDia(texto.target.value)
    }

    function meta() {
      console.log("mensagem");
      console.log(metaDia);
      console.log(valorTotal);
      if (metaDia <= valorTotal + parseFloat(textoDigitado)) {
        
       setMensagem ("Parabéns, você atingiu sua meta diária!")
      }
      else {
       setMensagem ("Você ainda não atingiu a sua meta")
      }
    }
  
  return(
    <>
    <h1>Contador de Copos de Água 💦</h1>
    <h2>💧 pressione o botão a cada copo de água bebido 💧</h2>
    <h2>você bebeu: {cont} copos</h2>

    <h3>Meta: {mensagem}</h3>

      <h1>{}</h1>
    <button onClick={clique}>copo de água</button>
    <button onClick={resetar}>resetar</button>

      <input 
      type="number" 
      placeholder='digite os mL do copo'
      onChange={handleTextoDigitado}
      value={textoDigitado}
      />
      <h2>Total de água ingerida: {valorTotal} mLs</h2>

      <input 
      type="number" 
      placeholder='digite a meta diária:'
      onChange={handleMetaDia}
      value={metaDia}
      />

      <h3>Histórico: {historico}</h3>

    </>
  ) 
}

export default App
