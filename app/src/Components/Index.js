import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import Header from './Header'
import Student from './Students'
import '../Style/Index.css'


function Index() {

    return (
        <div>
            <Header />
            <Container>
                <Card className="Card-HP">
                    <Card.Header>
                        <h3>Selecciona tu Filtro</h3>
                        <Row>
                            <Col><Button className="btn-hp" variant="light">Estudiantes</Button> </Col>
                            <Col><Button className="btn-hp" variant="light">Staff</Button> </Col>
                        </Row>
                    </Card.Header>

                    <Card.Body>
                        <Student/>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Index;