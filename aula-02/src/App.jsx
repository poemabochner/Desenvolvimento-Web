//ERRO NO VALOR - PROBLEMAS NA FILA DE EXECUÇÃO
    // setContador(contador + 1)
    // setContador(contador + 1)
    // setContador(contador + 1)
    
    // Assim funciona =)
    // setContador( prevState => prevState + 1)
    // setContador( prevState => prevState + 1)
    // setContador( prevState => prevState + 1)



import "./App.css";
import { useState } from "react";
//let nome = "Hello Kitty";


{/* <button onClick={() => setCount((count) => count + 1)}> // arrow function
          count is {count}
        </button> */}

//<button onClick={() => console.log("AAAAAAAAAAAA")}></button>        --> arrow function anonima, pq o nome nao
 //                                                                           não é passado na variável

// let aaa = () =>{
//   console.log("AAAAAAAAAAA")              --> arrow function comum, pq o nome é passado por variavel
// }

function App() {
  const [cont, Setcont] = useState(0);
  function clique() {
    console.log("botao clicado");
    Setcont(cont+1)
  }
  return (
    <>
      <h1 >Contador:{cont}</h1>
      <h1>{}</h1>
      <button onClick={clique}>clique aqui</button>
    </>
  );
}

export default App;
