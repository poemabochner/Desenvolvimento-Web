import { Link } from 'react-router-dom'

// export const Contatos = () => {
//     const contato = {
//         id: 1,
//         nome: "Poema",
//         email: 'poema@gmail.com'
//     }

function Contatos (){
    return(
        <>
        <h1>Componente Contatos</h1>
         <Link to="/">HOME</Link>
         <hr></hr>
         <Link to="/galeria">GALERIA</Link>

         <ol>
            <li><Link to="/contatos/1">Poema</Link></li>
            <li><Link to="/contatos">Contato 2</Link></li>
            <li><Link to="/contatos">Contato 3</Link></li>

         </ol>
        </>
    )
}

export default Contatos