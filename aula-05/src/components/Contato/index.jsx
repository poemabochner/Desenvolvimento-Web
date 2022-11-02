//criar um array de 3 contatos no App.jsx contato {id, nome, email} OK
//componente contato recebe 1 contato via props
//exibir informações do contato na tela
//chamar componente Contato la no JSX do App.jsx

function Contato (props){
    return(
        <>
         <h1>id: {props.contato.id}</h1>
         <h1>nome: {props.contato.nome}</h1>
         <h1>email: {props.contato.email}</h1>
         </>
    )
}

export default Contato