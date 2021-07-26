import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

import { LinkContainer } from "react-router-bootstrap"

const Header = () => {

    return (
        <Navbar bg="dark" collapseOnSelect variant="dark" expand="md">
            <Container>
            <LinkContainer to="/">
                <Navbar.Brand> titulo do site pw2</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="header-collapse-control" />
            <Navbar.Collapse id="header-collapse-control">
                <Nav className="mr-auto">
                    <NavDropdown title="manutenções" id="drop-nav">
                        <LinkContainer to="/livros">
                            <NavDropdown.Item> Livros</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header