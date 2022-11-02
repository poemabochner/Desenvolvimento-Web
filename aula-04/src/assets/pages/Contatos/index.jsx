import { Link } from 'react-router-dom'

export const Contatos = () => {
    const contato = {
        id: 1,
        nome: "Poema",
        email: 'poema@gmail.com'
    }

    const contato2 = {
        id: 2,
        nome: "Ana",
        email: 'ana@gmail.com'
    }

// function Contatos (){
    return(
        <>
        <h1>Componente Contatos</h1>
         <Link to="/">HOME</Link>
         <hr></hr>
         <Link to="/galeria">GALERIA</Link>

         <ol>
            <li><Link to={`/contatos/${contato.id}`} state={{nome: contato.nome, id: contato.id, email: contato.email }}>Poema</Link></li>
            <li><Link to={`/contatos/${contato2.id}`}state={{nome: contato2.nome, id: contato2.id, email: contato2.email }}>Contato 2</Link></li>
            <li><Link to="/contatos">Contato 3</Link></li>

         </ol>
        </>
    );
}

//export default Contatos