import { Link } from 'react-router-dom'

const Home = () => {
    return( 
        <>
        <h1>Componente Home</h1>
         <Link to="/contatos">CONTATOS</Link>
         <hr></hr>
         <Link to="/galeria">GALERIA</Link>
        </>
    )
}

export default Home;