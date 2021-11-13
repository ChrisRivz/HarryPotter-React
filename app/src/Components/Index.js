import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import Header from './Header'
import Student from './Students'
import axios from 'axios'
import '../Style/Index.css'
import CharactersContext from '../Context/CharactersContext';


function Index() {

    async function Axios_Stuent()
    {
        let resp = axios.get("http://hp-api.herokuapp.com/api/characters/students")
        return resp;
    } 
    async function Axios_Staff()
    {
        let resp = axios.get("http://hp-api.herokuapp.com/api/characters/staff")
        return resp;
    }
    async function Axios_All()
    {
        let resp = axios.get("http://hp-api.herokuapp.com/api/characters")
        return resp;
    }

    const [dataStudents, setStudents] = useState([]);
    const [dataType, setdataType] = useState(null);

    const onStudents = async () => {   
        let Call_characteres = await Axios_Stuent();
        setStudents(Call_characteres.data);
        setdataType("Students")
    }
    const onStafs = async () => {   
        let Call_staf = await Axios_Staff();
        setStudents(Call_staf.data);
        setdataType("Stafs")
    }
    const onAll = async () => {   
        let Call_all = await Axios_All();
        setStudents(Call_all.data);
        setdataType("All")
    }

    useEffect(() => {
        const FetchCharacters = () => {
            fetch("http://hp-api.herokuapp.com/api/characters")
                .then(response => {
                    response.json()
                        .then(
                            (result) => {
                                setStudents(result);
                                setdataType("All")
                            },
                        )
                })
        }
        FetchCharacters();
    },[])


    return (
        <div>
            <CharactersContext.Provider value={[dataStudents,setStudents]}>
                <Header />
                <Container>
                    <Card className="Card-HP">
                        <Card.Header>
                            <h3>Selecciona tu Filtro</h3>
                            <Row>
                                <Col><Button onClick={onAll} className={dataType==="All"? "btn-hp-active" : "btn-hp"} variant="light">Todos</Button> </Col>
                                <Col><Button onClick={onStudents} className={dataType==="Students"? "btn-hp-active" : "btn-hp"} variant="light">Estudiantes</Button> </Col>
                                <Col><Button onClick={onStafs} className={dataType==="Stafs"? "btn-hp-active" : "btn-hp"}variant="light">Staff</Button> </Col>
                            </Row>
                        </Card.Header>
                        <Student />
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </Container>
            </CharactersContext.Provider>
        </div>
    )
}

export default Index;