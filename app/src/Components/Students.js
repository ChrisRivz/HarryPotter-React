import React, { useContext, useReducer, useEffect, useState } from 'react';
import { Container, Card, Row, Col, Breadcrumb, ListGroup, Pagination } from 'react-bootstrap'
import { FaRegBookmark } from 'react-icons/fa';
import CharactersContext from '../Context/CharactersContext';
import FavoritesContext from '../Context/FavoritesContext';
import CountContext from '../Context/CountContext';
import Avatar from '@mui/material/Avatar';
import '../Style/Students.css';


function Student() {

    const initialState = {
        favorites: [],
    }
    const [, setFavorites] = useContext(FavoritesContext);
    const favoriteReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TO_FAVORITE':
                return {
                    ...state,
                    favorites: [...state.favorites, action.payload]
                }
            default:
                return state;
        }
    }

    const [dataStudents,] = useContext(CharactersContext);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [count, setCount] = useContext(CountContext);
    const [currentPage, setCurrentPage] = useState(1);

    const handleFav = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
        setCount(count + 1)
    }

    useEffect(() => {
        setFavorites(favorites)
    }, [favorites, setFavorites])


    let LIMIT = 2;
    const currentData = dataStudents.slice(
        (currentPage - 1) * LIMIT,
        (currentPage + 1) * LIMIT + LIMIT
    );
    const handlePrev = () => {
        setCurrentPage(currentPage - 1);
    }
    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    }

    return (
        <div>

            <Pagination className="pagination">
                {
                    currentPage !== 1 ? <Pagination.Prev onClick={handlePrev}>Anterior</Pagination.Prev> : null
                }
                {
                    currentPage * LIMIT / currentData.length <= 1 ? <Pagination.Next onClick={handleNext}>Siguiente</Pagination.Next> : null
                }
            </Pagination>
            <Row xs={1} sm={2} md={6} lg={6} className="g-4">
                {
                    currentData.legth !== 0
                        ?
                        currentData.map((item, i) =>
                        (
                            <Col key={i + 1} xs={6} sm={6} md={6} lg={6} className="col-hp">
                                <Card className="bg-dark text-white card-hp">
                                    <Row>
                                        <Col xs={12} sm={12} md={6} lg={6} className={item.house}>
                                            <Container>
                                                <Avatar
                                                    className="image-hp"
                                                    alt={item.name}
                                                    src={item.image}
                                                    sx={{ width: 125, height: 125 }}
                                                />
                                            </Container>
                                        </Col>
                                        <Col xs={12} sm={12} md={6} lg={6} className={item.alive ? ("col-info") : ("col-info  glass-effect")}>
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
                                                    <FaRegBookmark onClick={() => { handleFav(item) }} className="icon-fav" />
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