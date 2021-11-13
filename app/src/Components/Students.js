import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Breadcrumb, ListGroup } from 'react-bootstrap'
import { FaRegBookmark } from 'react-icons/fa';
import Avatar from '@mui/material/Avatar'
import '../Style/Students.css'


function Student() {

    const [dataStudents, setStudents] = useState([]);

    useEffect(() => {
        const FetchAPI_Students = () => {
            fetch("http://hp-api.herokuapp.com/api/characters")
                .then(response => {
                    response.json()
                        .then(
                            (result) => {
                                setStudents(result);
                            },
                        )
                })
        }

        FetchAPI_Students();
    }, [])

    return (
        <div>
            <Row>
                {
                    dataStudents.map(item =>

                    (
                        <Col sm={12} md={6} lg={6} className="col-hp">
                            <Card className="bg-dark text-white card-hp">
                                <Row>
                                    <Col  className={item.house}>
                                        <Container>
                                            <Avatar
                                                className="image-hp"
                                                alt={item.name}
                                                src={item.image}
                                                sx={{ width: 190, height: 190 }}
                                            />
                                        </Container>
                                    </Col>
                                    <Col className="col-info">
                                        <Breadcrumb>
                                            <Breadcrumb.Item>
                                                {
                                                    item.alive ? ("Vivo") : ("Muerto")
                                                }</Breadcrumb.Item>
                                            <Breadcrumb.Item>
                                                {
                                                    item.hogwartsStudent ? ("Estudiante") : ("Staff")
                                                }
                                            </Breadcrumb.Item>
                                            <Breadcrumb.Item className="icon-fav">
                                                <FaRegBookmark className="icon-fav" />
                                            </Breadcrumb.Item>
                                        </Breadcrumb>

                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                            <ListGroup>
                                                <ListGroup.Item><span className="font-weight-bold">Cumpleaños:</span> {item.dateOfBirth}</ListGroup.Item>
                                                <ListGroup.Item><span className="font-weight-bold">Genero: </span> {item.gender}</ListGroup.Item>
                                                <ListGroup.Item>Color de Ojos: {item.eyeColour}</ListGroup.Item>
                                                <ListGroup.Item>Color de Pelo: {item.hairColour}</ListGroup.Item>
                                            </ListGroup>
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    )
                    )
                }
            </Row>
        </div>
    )
}

export default Student;