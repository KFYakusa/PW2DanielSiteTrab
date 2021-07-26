
import { Add, DeleteOutline, Edit } from "@material-ui/icons"
import { useState } from "react"
import { Container, Table, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import styled from "styled-components"
import CustomAlert from "../../Components/CustomAlert/CustomAlert"
import bggif from '../../assets/imgs/電車.gif'

const TabelaLivros = (props) => {
    const [showDelAlert, setShowDelAlert] = useState(false)
    

    const [deleteMessage, setDeleteMessage] = useState("não há como recuperar este livro do abismo do esquecimento")
    
    // console.log(props.liblist);
    
    return (
        <StyledTabela>
            <Container fluid>
                <h1> Lista de Livros</h1>

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Autor</th>
                            <th>Ano</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="4">
                                <Link to={`/newLivro/`}>
                                    <Button variant="outline-success" >
                                        <Add />
                                    </Button>
                                </Link>
                            </td>
                        </tr>
                        { (props.liblist && props.liblist.length > 0) ? props.liblist.map(livro => {
                            
                            return (<tr key={livro.id}>
                                <td>{livro.nome}</td>
                                <td>{livro.autor}</td>
                                <td>{livro.ano}</td>
                                <td>
                                    <Link to={`/editLivro/${livro.id}`}>
                                        <Button variant="outline-primary">
                                            <Edit />
                                        </Button>
                                    </Link>
                                    <Button variant="outline-danger" onClick={() => { props.remove(livro); setShowDelAlert(livro) }}>
                                        <DeleteOutline />
                                    </Button>
                                </td>
                            </tr>)
                        }) : <></> }
                    </tbody>
                </Table>

                {showDelAlert && <CustomAlert variant="danger" titulo="livro excluido" transition text={deleteMessage} closeLabel="" dismissible  />}
            </Container>
        </StyledTabela>
    )
}

export default TabelaLivros


const StyledTabela = styled.div`
background: url(${bggif});
height:100vh;
padding:3vw;
padding-top: 2vh;
h1{
    text-align:center;
    position:relative;
    color:white;
    background-color: rgba(0,0,0,0.5);
    border-radius:10px;
}
th,td{
    text-align:center;
}
.btn{
    width:40%;
    margin-left:2%;
}
.btn-outline-success{
    width:100%;
    margin-left:0;
}
.table{
    border-radius:10px;
    opacity: 0.95;
}

`