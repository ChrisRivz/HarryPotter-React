import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import Header from './Header'
import Student from './Students'
import SkeletonComp from './SkeletonComp'
import axios from 'axios'
import '../Style/Index.css'
import CharactersContext from '../Context/CharactersContext';
import FavoritesContext from '../Context/FavoritesContext';
import ContadorContext from '../Context/CountContext';


function Index() {

    async function Axios_Stuent() {
        let resp = axios.get("https://hp-api.herokuapp.com/api/characters/students")
        return resp;
    }
    async function Axios_Staff() {
        let resp = axios.get("https://hp-api.herokuapp.com/api/characters/staff")
        return resp;
    }


    const [dataStudents, setStudents] = useState([]);
    const [dataFavorites, setFavorites] = useState([]);
    const [dataType, setdataType] = useState(null);
    const [count, setCount] = useState(0);

    const onStudents = async () => {
        setStudents([]);
        let Call_characteres = await Axios_Stuent();
        setStudents(Call_characteres.data);
        setdataType("Students")
    }
    const onStafs = async () => {
        setStudents([]);
        let Call_staf = await Axios_Staff();
        setStudents(Call_staf.data);
        setdataType("Stafs")
    }

    useEffect(() => {
        const FetchCharacters = () => {
            fetch("https://hp-api.herokuapp.com/api/characters")
                .then(response => {
                    response.json()
                        .then(
                            (result) => {
                                setStudents(result);
                            },
                        )
                })
        }

        FetchCharacters();
    }, [])


    return (
        <div>
            <ContadorContext.Provider value={[count, setCount]}>
                <FavoritesContext.Provider value={[dataFavorites, setFavorites]}>
                    <CharactersContext.Provider value={[dataStudents, setStudents]}>
                        <Header />
                        <Container>
                            <Card className="Card-HP">
                                <Card.Header className="card-header-hp">
                                    <h3>Harry Potter</h3>
                                    <h3>Selecciona tu Filtro</h3>
                                    <Row>
                                        <Col><Button onClick={onStudents} className={dataType === "Students" ? "btn-hp-active" : "btn-hp"} variant="light">Estudiantes</Button> </Col>
                                        <Col><Button onClick={onStafs} className={dataType === "Stafs" ? "btn-hp-active" : "btn-hp"} variant="light">Staff</Button> </Col>
                                    </Row>
                                </Card.Header>
                                {
                                    dataStudents.length === 0 ? (<SkeletonComp />) : (<Student />)
                                }
                                <Card.Body>
                                </Card.Body>
                            </Card>
                        </Container>
                    </CharactersContext.Provider>
                </FavoritesContext.Provider>
            </ContadorContext.Provider>

        </div>
    )
}

export default Index;