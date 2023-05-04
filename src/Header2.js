import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './App.css';

function OffcanvasExample() {
    let titulo = 'Tamagotchi';
    const [loggedIn, setLoggedIn] = useState(true);    // si el usuario no ha iniciado sesión
    const [showElements, setShowElements] = useState(loggedIn);


    if (!loggedIn) {
        // Si el usuario no está logueado, oculta los elementos que no deseas mostrar
        const elementsToHide = document.querySelectorAll('.my-element');
        elementsToHide.forEach(element => {
            element.classList.add('hidden');
        });
    }
    // Cuando el usuario inicia sesión con éxito, muestra los elementos que deseas mostrar
    const elementsToShow = document.querySelectorAll('.my-element');
    elementsToShow.forEach(element => {
        element.classList.remove('hidden');
    });

    if (window.location.pathname === "/Tamagotchi") {
        titulo = "Tamagotchi";
    } else if (window.location.pathname === "/Piedra") {
        titulo = "Piedra"
    } else {
        titulo = "Home";
    }

    return (
        <>
            {['xxl'].map((expand) => (
                <Navbar key={expand} bg="transparent" expand={expand} sticky="top" className="navigation navbar-dark">
                    <Container fluid>
                        <h2 className="hovertown titulo">{titulo}</h2>

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="ms-auto" />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className='bg-dark'
                            style={{ textAlign: 'center', fontSize: 20 }}
                        >
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    {loggedIn ? (
                                        <>
                                            <h2 className="hovertown titulo titulo2 d-block d-sm-block d-md-block d-xl-block d-xxl-none">{titulo}</h2>
                                            <Nav.Link href="/" className="text-white">Home</Nav.Link>
                                            <Nav.Link href="/Tamagotchi" className="text-white">Juego 1</Nav.Link>
                                            <Nav.Link href="/Piedra" className="text-white">Juego 2</Nav.Link>
                                            <Nav.Link href="/Stats" className="text-white">Stats</Nav.Link>
                                            <Nav.Link onClick={() => setLoggedIn(false)} className="text-white">Logout</Nav.Link>
                                        </>
                                    ) : (
                                        <>
                                            <Nav.Link href="/Home" className="text-white">Home</Nav.Link>
                                            <Nav.Link href="/Tamagotchi" className="text-white">Juego 1</Nav.Link>
                                            <Nav.Link href="/Piedra" className="text-white">Juego 2</Nav.Link>
                                            <Nav.Link href="/Login" className="text-white">Login</Nav.Link>
                                        </>
                                    )}
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
};


// }

export default OffcanvasExample;