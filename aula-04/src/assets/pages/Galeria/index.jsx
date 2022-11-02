import { Link } from 'react-router-dom'

function Galeria (){
    return( 
    <>
    <h1>Componente Galeria</h1>
    <Link to="/">HOME</Link>
    <hr></hr>
    <Link to="/contatos">CONTATOS</Link>
    </>
    )
}
export default Galeria