import { useState } from 'react'
import './App.css'

function App() {
  const [textoDigitado, setTextoDigitado] = useState("informação no State");

  const handleText = () => {
    console.log("passar o texto digitado")
  };

  const handleTextoDigitado = (texto) => {
    console.log(texto.target.value)
    setTextoDigitado(texto.target.value)
  }

  return (
    <>
      <h1>Inputs Controlados</h1>
      <h2>informação digitada: {textoDigitado}</h2>
      <input 
      type="text" 
      placeholder='digite seu texto aqui'
      //onChange={(e) => e = setTextoDigitado(e.target.value)}
      //onChange={e => handleTextoDigitado(e.target.value)}         //3 formas de fazer a mesma coisa
      onChange={handleTextoDigitado}
      value={textoDigitado}
      />
      <button onClick={handleText}>enviar</button>
      </>
  );
}

export default App


// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [textoDigitado, setTextoDigitado] = useState("Informação no State");

//   const handleText = () => {
//     console.log("Passar o texto digitado");
//   };

//   const handleTextoDigitado = (e) => {
//     console.log(e.target.value);
//     setTextoDigitado(e.target.value);
//   };

//   return (
//     <>
//       <h1>Inputs Controlados</h1>
//       <h2>Informação digitada: {textoDigitado}</h2>
//       <input
//         type="text"
//         placeholder="DIGITE SEU TEXTO AQUI"
//         // onChange={e => setTextoDigitado(e.target.value)}
//         // onChange={e => handleTextoDigitado(e.target.value)}
//         onChange={handleTextoDigitado}
//         value={textoDigitado}
//       />
//       <button onClick={handleText}>Enviar</button>
//     </>
//   );
// }

// export default App;