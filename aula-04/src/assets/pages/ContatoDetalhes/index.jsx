import { useParams } from "react-router-dom"

const ContatoDetalhes = () => {
    const { id } = useParams()

    console.log(typeof id)
    const renderizaNome = () => {
        switch (id){
            case '1':
                return 'Poema'
                break;
            case '2':
                return <h1>Aaaaa</h1>
                break;
            default:
                return <h1>desconhecido</h1>
                break;
        }
    }

    //Renderização Condicional através do if
    if(id=='1'){
    return <h1>Poema que veio do if</h1>
    }

    return (
        <h1>
            {/* //Renderização Condicional através do operador lógico */}
        {id == '2'  && "Contato: AAA que veio do &&"}
        {/* CONTATO {renderizaNome()} */}
        {/* Renderização Condicional através operador ternário */}
        {id == 3 ? "Caroline do Operador Ternário": null}
        </h1>
    )
}

export default ContatoDetalhes

// if(id == '1'){
//     return <h1>João que veio do if</h1>
// }

// return (
//     <h1> 
//         {id == '2' && "Contato: Amanda que veio do &&"}
//         {/* Contato: {renderizaNome()} */}
//         {id == 3 ? "Caroline do Operador ternário" : null}
//     </h1>
// );