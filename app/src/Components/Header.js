import React from 'react';
import { Navbar, Container, ButtonGroup, Button } from 'react-bootstrap'
import { FaRegBookmark, FaPlusCircle} from 'react-icons/fa';
import '../Style/Header.css'

function Header() {
    return (
        <div className="Container-header">
            <Navbar className="nav-hp" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand className="nav-brand" href="#home">Created by Chris</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <ButtonGroup aria-label="Basic example">
                            <Button className="btn-hp" variant="secondary">Favoritos <FaRegBookmark /></Button>
                            <Button className="btn-hp" variant="secondary">Agregar <FaPlusCircle/> </Button>
                        </ButtonGroup>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;