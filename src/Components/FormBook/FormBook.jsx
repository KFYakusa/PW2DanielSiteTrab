
import { Clear, SaveAlt } from '@material-ui/icons';
import React, { useMemo, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import bggif from '../../assets/imgs/電車.gif'

export default function FormBook(props) {
    const [livroForm, setLivroForm] = useState(props.livro? props.livro : {id:null,nome:"",autor:"",ano:null});
    const [cance,setCancelar] = useState(false)
    function register(e) {
        e.preventDefault();
        if (props.newBook){
            
            console.log("entrando auqi")
            console.log(livroForm);
            props.newBook(livroForm)

            // console.log(props.newBook)
        }
            
        else if (props.edit)
            props.edit(livroForm)
        setCancelar(true)
    }

    function cancelar(){
        setCancelar(true)
    }

    

    if(cance)
        return <Redirect to="/livros"/>

    return (
        <StyledForm>
            <Container fluid>
            <Form onSubmit={register}>
                <Container>
                <Row>
                    <Col md={4}>
                        <Form.Control placeholder="Título" name="nome" value={livroForm.nome} onChange={(e)=>setLivroForm({...livroForm, nome:e.target.value})}/>
                    </Col>
                    <Col md={3}>
                        <Form.Control placeholder="Autor" name="autor" value={livroForm.autor} onChange={(e)=>setLivroForm({...livroForm,autor:e.target.value})}   />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Ano" type="number" min="0" value={livroForm.ano} name="ano" onChange={e=>setLivroForm({...livroForm,ano:e.target.value})}  />
                    </Col>
                    <Col>
                        <Button variant="outline-secondary" onClick={cancelar}>  <Clear/>  </Button>
                    </Col>
                    <Col>
                        <Button variant="outline-success" type="submit"> <SaveAlt/> </Button>
                    </Col>
                </Row>
                </Container>
            </Form>
            </Container>
        </StyledForm>
    )
}


const StyledForm = styled.div`
background: url(${bggif});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
box-shadow: 0px 0px 12px black;
padding-top:10vh;
height:100vh;
.container-fluid{
    padding-top:2vh;
    
    background-color:rgba(33,37,41,.95);
}
.form-control{
    margin-bottom: 2vh;
}
.btn{
    width:100%;
}


` 



const useObjState = initialObj => {
    const [obj, setObj] = React.useState(initialObj);
    const setObjHelper = useMemo( () => { // the value of setObjHelper is permanent, so even if it is passed to a child component, it shouldn't require extra component updates
      const helper = {}
      Object.keys(initialObj).forEach(key => {
        helper[key] = newVal => setObj({ ...obj, [key]: newVal });
      });
      return helper
    }, [])
    return [obj, setObjHelper];
  };