import React, { useState, useContext } from 'react';
import { Navbar, Container, ButtonGroup, Button, Offcanvas, Modal, Form, Row, Col, Alert } from 'react-bootstrap'
import { FaRegBookmark, FaPlusCircle } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { useForm } from 'react-hook-form'
import FavoritesContext from '../Context/FavoritesContext'
import CountContext from '../Context/CountContext'
import Avatar from '@mui/material/Avatar'
import '../Style/Header.css'

function Header() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [dataFavorites, setdataFavorites] = useContext(FavoritesContext);
    const [count, setCount] = useContext(CountContext);
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [avatar, setAvatar] = useState(null)
    const [showAlert, setAlert] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const DeleteFav = (item) => {
        let array = dataFavorites.favorites.filter(fav => fav.name !== item.name);
        if (array) {
            setdataFavorites({ favorites: array });
            setCount(array.length);
        }
    }

    const onSubmit = data => {
        reset();
        setAvatar(null);
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 2000);
    }

    const onChange_avatar = async e => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            setAvatar(reader.result);
        });
        reader.readAsDataURL(e.target.files[0]);
    }

    return (
        <div className="Container-header">
            <Navbar className="nav-hp" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand className="nav-brand" target="a_blank" rel="noopener noreferrer" href="https://chrisrivz.com/">Created by Chris</Navbar.Brand>
                    <div className="justify-content-end">
                        <ButtonGroup aria-label="Basic example">
                            <Button className="btn-hp" variant="secondary" onClick={handleShow}>Favoritos <FaRegBookmark /></Button>
                            <Button className="btn-hp" variant="secondary" onClick={handleShowModal}>Agregar <FaPlusCircle /> </Button>
                        </ButtonGroup>
                    </div>
                </Container>
            </Navbar>
            {
                <Offcanvas show={show} onHide={handleClose} placement="end" className="offcanvas-fav">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Favoritos</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className="list-fav">
                            {
                                count !== 0 ?
                                    (
                                        dataFavorites.favorites.map((item, i) =>
                                        (
                                            <li key={i}>
                                                <div className="flex-box-favourites">
                                                    <div>
                                                        <Avatar
                                                            src={item.image}
                                                            alt={item.name}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label>{item.name}</label>
                                                    </div>
                                                    <div>
                                                        <FaTrash onClick={() => DeleteFav(item)} className="icon-trash" />

                                                    </div>
                                                </div>
                                            </li>
                                        )
                                        )
                                    )
                                    :
                                    (
                                        <h4>Sin Favoritos</h4>
                                    )
                            }
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>

            }
            <Modal show={showModal} onHide={handleCloseModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Agregar un personaje</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body-hp">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row className="mb-3">
                            <Col lg={6} md={6} sm={6}>
                                <Form.Group controlId="Name">
                                    <Form.Label className="form-label-hp">NOMBRE</Form.Label>
                                    <Form.Control type="text" placeholder=""
                                        className="input-hp"
                                        {...register("Name", {
                                            required: true
                                        })} />
                                </Form.Group>
                                {errors?.Name && <label className="mandatory">¡ Nombre necesario ! Favor de ingresar un Nombre</label>}

                            </Col>
                            <Col lg={6} md={6} sm={6}>
                                <Form.Group controlId="Birthday">
                                    <Form.Label
                                        className="form-label-hp">CUMPLEAÑOS</Form.Label>
                                    <Form.Control type="text" placeholder=""
                                        className="input-hp"
                                        {...register("Birthday", {
                                            required: true
                                        })} />
                                </Form.Group>
                                {errors?.Birthday && <label className="mandatory">¡ Compleaños necesario ! Favor de ingresar el Cumpleaños</label>}
                            </Col>
                            <Col lg={6} md={6} sm={6}>
                                <Form.Group as={Col} controlId="ColorOjos">
                                    <Form.Label
                                        className="form-label-hp">COLOR DE OJOS</Form.Label>
                                    <Form.Control type="text" placeholder=""
                                        className="input-hp"
                                        {...register("EyesColor", {
                                            required: true
                                        })} />
                                </Form.Group>
                                {errors?.EyesColor && <label className="mandatory">¡ Color de ojos necesario ! Favor de ingresar un color de ojos</label>}
                            </Col>
                            <Col lg={6} md={6} sm={6}>
                                <Form.Group as={Col} controlId="ColorPelo">
                                    <Form.Label
                                        className="form-label-hp">COLOR DE PELO</Form.Label>
                                    <Form.Control type="text" placeholder=""
                                        className="input-hp"
                                        {...register("HairColor", {
                                            required: true
                                        })} />
                                </Form.Group>
                                {errors?.HairColor && <label className="mandatory">¡ Color de Pelo necesario ! Favor de ingresar el color de Pelo</label>}
                            </Col>
                            <Col lg={6} md={6} sm={6}>
                                <Form.Label
                                    className="form-label-hp">GÉNERO</Form.Label>
                                {errors?.Genere && <label className="mandatory">¡ Genero necesario ! Favor de ingresar un Genero</label>}
                                <Row>
                                    <Col lg={6} md={6} sm={6}>

                                        <Form.Check
                                            type="radio"
                                            label="Mujer"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                            value="Mujer"
                                            {...register("Genere", {
                                                required: true
                                            })}

                                        />

                                    </Col>

                                    <Col lg={6} md={6} sm={6}>

                                        <Form.Check
                                            type="radio"
                                            label="Hombre"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                            value="Hombre"
                                            {...register("Genere", {
                                                required: true
                                            })}
                                        />
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={6} md={6} sm={6}>
                                <Form.Label
                                    className="form-label-hp">POSICIÓN</Form.Label>
                                {errors?.Position && <label className="mandatory">¡ Posición necesario ! Favor de ingresar una Posición</label>}
                                <Row>
                                    <Col lg={6} md={6} sm={6}>

                                        <Form.Check className="rbtn-hp"
                                            type="radio"
                                            label="Estudiante"
                                            name="formHorizontalRadios_Posicion"
                                            id="formHorizontalRadios1"
                                            value="Estudiante"
                                            {...register("Position", {
                                                required: true
                                            })}
                                        />
                                    </Col>

                                    <Col lg={6} md={6} sm={6}>

                                        <Form.Check
                                            type="radio"
                                            label="Staff"
                                            name="formHorizontalRadios_Posicion"
                                            id="formHorizontalRadios2"
                                            value="Staff"
                                            {...register("Position", {
                                                required: true
                                            })}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label
                                className="form-label-hp">FOTOGRAFIA</Form.Label>
                            <Form.Control type="file" accept="image/*"
                                {...register("Photo", {
                                    required: true
                                })}
                                onChange={onChange_avatar}
                            />
                            <Avatar
                                className="image-hp"
                                alt="avatar-hp"
                                src={avatar}
                                sx={{ width: 125, height: 125 }}
                            />
                            <br />

                            <Alert show={showAlert} variant="success" >
                                <Alert.Heading>Documento guardado con exito</Alert.Heading>
                            </Alert>
                        </Form.Group>

                        {errors?.Photo && <label className="mandatory">¡ Foto necesaria ! Favor de ingresar una Foto</label>}

                        <Button type="submit" variant="primary" size="lg" className="btn-large-modal btn-hp">
                            Guardar
                    </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Header;