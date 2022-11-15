import './App.css'
import { FaLinkedin, FaReact, FaTasks } from 'react-icons/fa'
import { Button, Container, Row, Col } from 'react-bootstrap';

const task = [{
  id: 1,
  titulo: "primeira task",
  descricao: "descrição da primeira task",
  prioridade: "Urgente"
},
{
id: 1,
titulo: "primeira task",
descricao: "descrição da primeira task",
prioridade: "Urgente"
}
]

function App() {
  return (
    <Container style={{backgroundColor: "gray"}}>

{tasks.map(item => {
        return <li key={item.id}>{item.titulo}</li>
      })}
      {/* <h1><FaReact />APP JSX</h1>

      <Button variant="danger" className="me-2 mt-3">CLIQUEI AQUI</Button>
      <button type="button" class="btn btn-danger">Primary</button> */}
      {/* <Row style={{backgroundColor: "darkgoldenrod", padding: 30}}>
        <Col style={{backgroundColor: "lightgray"}}>12 COLUNAS</Col>
      </Row>
      <Row style={{backgroundColor: "darkgoldenrod", padding: 30}}>
        <Col md={9} style={{backgroundColor: "lightgray"}}>6 COLUNAS</Col>
        <Col md={3} style={{backgroundColor: "lightgray"}}>6 COLUNAS</Col>
      </Row>
      <Row style={{backgroundColor: "darkgoldenrod", padding: 30}}>
        <Col md={8} style={{backgroundColor: "lightgray"}}>6 COLUNAS</Col>
      </Row> */}


    </Container>

  )
}

export default App
