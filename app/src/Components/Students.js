import React, { useContext, } from 'react';
import { Container, Card, Row, Col, Breadcrumb, ListGroup } from 'react-bootstrap'
import { FaRegBookmark } from 'react-icons/fa';
import CharactersContext from '../Context/CharactersContext'
import Avatar from '@mui/material/Avatar'
import '../Style/Students.css'


function Student() {

    const [dataStudents,] = useContext(CharactersContext);

    return (
        <div>
            <Row>
                {
                    dataStudents.legth !== 0
                        ?
                        dataStudents.map((item, i) =>
                        (
                            <Col key={i + 1} sm={12} md={6} lg={6} className="col-hp">
                                <Card className="bg-dark text-white card-hp">
                                    <Row>
                                        <Col className={item.house}>
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
                                                <ListGroup as="ol">
                                                    <ListGroup.Item as="li"><span className="font-weight-bold">Cumpleaños:</span> {item.dateOfBirth}</ListGroup.Item>
                                                    <ListGroup.Item as="li"><span className="font-weight-bold">Genero: </span> {item.gender}</ListGroup.Item>
                                                    <ListGroup.Item as="li"><span className="font-weight-bold">Color de Ojos: </span> {item.eyeColour}</ListGroup.Item>
                                                    <ListGroup.Item as="li"><span className="font-weight-bold">Color de Pelo: </span> {item.hairColour}</ListGroup.Item>
                                                </ListGroup>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        )
                        )
                        :
                        null
                }
            </Row>
        </div>
    )
}

export default Student;