import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import Contato from "./components/Contato"

function App() {
  const [count, setCount] = useState(0)

  const nome = "João"
  const nome2 = "Poema"
  const nome3 = "Paulo"

  const nomes = ["João", "Carlos", "Amanda"]

  // nomes.forEach((item, index)=> {
  //   if(index>=5) return
  //   console.log(index)
  //   console.log(item);
  // })

  const novoArry = nomes.map((nome, index) => {
    if(index >1) return
    console.log(nome)
    return<h1>nome</h1>
  })
  
  const coisas = ["Pedro", null, true]
  const arrayDeObjetos = [
    {nome: "joão", id: 1, materiais: ["WEB", "Mobile"]},
    {nome: "carlos", id:2},
  ]

  const arrayDeContatos = [
    {id: 1, nome: "poema", email: "poema@gmail.com"},
    {id: 2, nome: "madoka", email: "madoka@gmail.com"},
    {id: 3, nome: "lux", email: "lux@gmail.com"},

  ]

  //Array de Professores que vai conter(id, nome, arrayMatérias[3])

  // console.log(nomes)
  // console.log(nomes.length)
  // console.log(nomes[0])

  // HTMLFormControlsCollection.log(arrayDeObjetos)
  // console.log(arrayDeObjetos[0].nome)
  // console.log(arrayDeObjetos[0].materiais[1])


  return (
    <>
    {/* <h1>Trabalhando com Arrays e Objetos</h1>
    {nomes.map(item => <h1>{item}</h1>)} */}

    {arrayDeContatos.map((contato) => {
        return <Contato contato={contato} key={contato.id}/>
      })}

    {/* <Contato contato={arrayDeContatos[1]} /> */}
    </>
  )
}

export default App
